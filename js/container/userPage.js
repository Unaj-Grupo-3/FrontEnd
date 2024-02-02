import { GetMyUser, UploadPhoto, ChangeUser } from "../services/fetchUserServices.js";
//import { GetMail, PutPasswd } from "../services/fetchAuthServices.js";
import { PutPasswd } from "../services/fetchAuthServices.js";
import { GetMyOverall, PostMyOverall, PutMyOverall, GetCrushGender, PostGenderPref, DeleteGenderPref, GetInterest, GetPreference, PutPreference, PostPreference } from "../services/fetchPreferenceServices.js";
import { UserInfoComponent, PrefComponent, InterestTag, PrefOtherComponent, InterestOtherTag } from "../components/UserInfoComponent.js";
import { UserPageImg } from "../components/UserPageImg.js";
import { AddPhotoBtn } from "../components/AddPhotoBtn.js";
import { DeleteSuggestion } from "../services/fetchSuggestionServices.js";


let userInfo = document.querySelector(".user__info");
let userPhotoSection = document.querySelector("#photo_section");
let dragSrcEl;
let inputFile;
let inputMinAge;
let inputMaxAge;
let inputDistance;
let lblMinAge;
let lblMaxAge;
let lblDistance; 
let genderList = [];
let photoMsj = document.querySelector("#resp_msj_photo");
const modalPsswd = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const changePasswdBtn = document.querySelector("#btn_change_passwd");
const modal2 = document.querySelector('.modal_2');
const modal3 = document.querySelector('.modal_3');


/* Drag & Drop */

function handleDragStart(e) {

    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {

    this.style.opacity = '1';

    items.forEach(function (item) {
        item.classList.remove('over');
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
    this.style.opacity = '1';
}

function handleDrop(e) {
    //e.stopPropagation(); // stops the browser from redirecting.
    e.preventDefault();
    this.style.opacity = '1';
    if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            ModPhotos();
        }
    return false;
}

/* Otros */

async function ModGender(e) {

    let request = {
        gender: parseInt(e.target.value)
    }

    let response = await ChangeUser(request);

    if(response !== null) {
    }
}

async function ModCrushGender(e) {

    let response;
    let request = {
        genderId: parseInt(e.target.value)
    }

    if(e.target.checked) {
        response = await PostGenderPref(request);
    } else {
        response = await DeleteGenderPref(request);
    }
    await DeleteSuggestion(0);
  
}

async function ModDescription(e) {

    let request = {
        description: e.target.value
    }

    let response = await ChangeUser(request);

    if(response !== null) {
    }
}


async function ModPreference(own, id, value) {

    let oldResponse = await GetPreference();
    let oldValues = oldResponse.filter((element) => element.interest.id === id)[0] || {};
    let request;

    if(own){
        request = {
            interestId: id,
            ownInterest: value,
            like: oldValues.like
        }
    }else{
        request = {
            interestId: id,
            ownInterest: oldValues.ownInterest,
            like: value
        }
    }

    let response = await PutPreference(request);

    if (response && response.response && !own){
        await DeleteSuggestion(0);
    }

    return response;
}


async function CreatePreference(own, id) {

    let request;

    if(own){
        request = {
            interestId: id,
            ownInterest: true
        }
    }else{
        request = {
            interestId: id,
            like: true
        }
    }

    let response = await PostPreference(request);

    if (response && response.response && !own){
        await DeleteSuggestion(0);
    }

    return response;
}

const ModPhotos = async () => {

    let photoArray = [];
    let order = document.querySelectorAll(".drag__img");
    order.forEach( (item) => {
        let id = item.id;
        let idx = id.search("_") + 1;
        let photoId = id.slice(idx, id.length);
        photoArray.push(parseInt(photoId));
    })

    let request = {
        images: photoArray
    }

    let response = await ChangeUser(request);

    if(response !== null) {
        BtnDelete(document.querySelectorAll(".btn_delete"));
    }
}

const AddPhoto = async () => {

    const formData = new FormData();
    formData.append('file', inputFile.files[0]);
    let response = await UploadPhoto(formData);

    if(response == null) {
    }
    if(response == -1){
        photoMsj.innerHTML = "Se ha alcanzado el limite de fotos permitidas(max=6).";
        photoMsj.style.color = "#F02E3A";
        photoMsj.style.display = "block";
        setTimeout(() => {
            photoMsj.style.display = "none";
        }, 3000);
    }
    else{
        photoMsj.style.display = "block";
        RenderUserPhotos(response.response.images);
        
        setTimeout(() => {
            photoMsj.style.display = "none";
        }, 3000);
        
    }
    
}

async function BtnDelete(elements) {
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
            ModPhotos();
        })
    })
}


/* Password */

async function ShowPssWdModal() {
    modalPsswd.classList.add("modal--show");
};


modalCloseBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    modalPsswd.classList.remove("modal--show");
});


const ChangePassword = async () => {
    let passwdMsjCont = document.querySelector('#response__msj');
    let psswd = document.querySelector('#in_passwd').value;
    let confirm = document.querySelector('#in_confirm_passwd').value;
    let passwdMsg = "";

    if(psswd === confirm){
        let request = {
            password: psswd
        }

        let response = await PutPasswd(request);

        passwdMsjCont.innerHTML = response;
        passwdMsjCont.style.display = "block";
        setTimeout(() => {
            passwdMsjCont.style.display = "none";
            modalPsswd.classList.remove("modal--show");
        }, 3000);

    }else{
        passwdMsjCont.innerHTML = "Las contraseñas no son iguales.";
        passwdMsjCont.style.display = "block";
        setTimeout(() => {
            passwdMsjCont.style.display = "none";
        }, 3000);
    }
}

changePasswdBtn.addEventListener('click', ChangePassword);


/* Gender */

async function CheckGender(value) {

    if(value == 1) {
        document.querySelector("#male").checked = true;
    }
    if(value == 2) {
        document.querySelector("#female").checked = true;
    }
    if(value == 3) {
        document.querySelector("#other").checked = true;
    }
}

async function CheckCrushGender(genderList) {

    if(genderList.includes(1)) {
        document.querySelector("#crush_male").checked = true;
    }
    if(genderList.includes(2)) {
        document.querySelector("#crush_female").checked = true;
    }
    if(genderList.includes(3)) {
        document.querySelector("#crush_other").checked = true;
    }
}

/* Min & Max age, Distance */

async function ChangeOverall() {

    let request = {
        sinceAge: inputMinAge.value,
        untilAge: inputMaxAge.value,
        distance: inputDistance.value  
    }

    let response = await PutMyOverall(request);

    if (response.response){
        await DeleteSuggestion(0);
    }

}

/* Modal Interests methods */

const ShowMyInterest = async () =>
{
    let response = await GetPreference();

    response.forEach((item) => {
        if(item.ownInterest) {
            let intId = "#my_int_" + item.interest.id;
            let interestContainer = document.querySelector(intId);
            interestContainer.classList.add('interest_item_sel');
        }
    })
}

const ShowOtherInterest = async () =>
{
    let response = await GetPreference();

    response.forEach((item) => {
        if(item.like) {

            let intOtherId = "#other_int_" + item.interest.id;
            let interestOtherContainer = document.querySelector(intOtherId);
            interestOtherContainer.classList.add('interest_item_sel_other');
        }
    })
}


async function InterestOnClick(e) 
{
    let intIdString = this.id;
    let idx = intIdString.lastIndexOf("_") + 1;
    let intId = intIdString.slice(idx, intIdString.length);
    let sendId = parseInt(intId);


    if(this.classList.contains('interest_item_sel'))
    {
        this.classList.remove('interest_item_sel');
        
        await ModPreference(true, sendId, false);
    }
    else
    {
        this.classList.add('interest_item_sel');
        let response = await ModPreference(true, sendId, true);
        if(response.message = "La preferencia ingresada no existe"){
            CreatePreference(true, sendId);
        }
    }
}

async function InterestOtherOnClick(e)
{
    let intIdString = this.id;
    let idx = intIdString.lastIndexOf("_") + 1;
    let intId = intIdString.slice(idx, intIdString.length);
    let sendId = parseInt(intId);

    if(this.classList.contains('interest_item_sel_other'))
    {
        this.classList.remove('interest_item_sel_other');
        await ModPreference(false, sendId, false);
    }
    else
    {
        this.classList.add('interest_item_sel_other');
        let response = await ModPreference(false, sendId, true);
        if(response.message = "La preferencia ingresada no existe"){
            CreatePreference(false, sendId);
        }
    }
}

async function CloseModal()
{
    if(modal2.classList.contains("modal--show-2"))
    {
        modal2.classList.remove("modal--show-2");
    }
    if(modal3.classList.contains("modal--show-3"))
    {
        modal3.classList.remove("modal--show-3");
    }
}


/* Renders */

async function RenderPrefModal() {

    const prefContainer = document.querySelector('.pref_container');
    const modalCloseGral2 = document.querySelector('#btn_close_gral_2');

    let categories = await GetInterest();

    categories.forEach((cat) =>
    {
        let ints4Cat = cat.interes;
        let contName = '#cat_' + cat.id;

        prefContainer.innerHTML += PrefComponent(cat.id, cat.description);
        
        let intContainer = document.querySelector(contName);

        ints4Cat.forEach((item) =>
        {
            intContainer.innerHTML += InterestTag(item.id, item.description);

            let intId = "#my_int_" + item.id;
        });
    })

    modalCloseGral2.addEventListener('click', CloseModal);

    let tagContainers = document.querySelectorAll('.interest_item');
    tagContainers.forEach((item) =>{
        item.addEventListener('click', InterestOnClick);
    });

    ShowMyInterest();
}


async function RenderPrefOtherModal() {

    const prefOtherContainer = document.querySelector('.pref_container_other');
    const modalCloseGral3 = document.querySelector('#btn_close_gral_3');

    let categories = await GetInterest();

    categories.forEach((cat) =>
    {
        let ints4Cat = cat.interes;
        let contName = '#cat2_' + cat.id;

        prefOtherContainer.innerHTML += PrefOtherComponent(cat.id, cat.description);
        
        let intContainer = document.querySelector(contName);

        ints4Cat.forEach((item) =>
        {
            intContainer.innerHTML += InterestOtherTag(item.id, item.description);

            let intId = "#other_int_" + item.id;
        });
    })

    modalCloseGral3.addEventListener('click', CloseModal);

    let tagContainers = document.querySelectorAll('.interest_other_item');
    tagContainers.forEach((item) =>{
        item.addEventListener('click', InterestOtherOnClick);
    });

    ShowOtherInterest();
}

async function RenderUserPhotos(photoList) {

    userPhotoSection.innerHTML = '';

    photoList.forEach((element, index) => {
        userPhotoSection.innerHTML += UserPageImg(index, element.id, element.url);
    });

    userPhotoSection.innerHTML += AddPhotoBtn();

    let items = document.querySelectorAll('.user__photos .drag__container');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });

    inputFile = document.getElementById('input_id');
    inputFile.addEventListener('input', AddPhoto);

    BtnDelete(document.querySelectorAll(".btn_delete"));

}

async function decodeToken(token) {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedData = await JSON.parse(atob(base64));
    
    return decodedData;
}


/* Agregar manejo de errores: ej: si no existen preferencias del usuario */
const RenderUser = async () =>
{
    let user = await GetMyUser();

    const jwtToken = sessionStorage.getItem("token");
    const claims = await decodeToken(jwtToken);


    let mail = claims.Mail;
    let images = user.images;


    userInfo.innerHTML = '';
    userPhotoSection.innerHTML = '';

    /*if( typeof user.image === 'undefined'){
        image = "http://127.0.0.1:5501/img/user-default.png";
    }
    else{
        image = user.image[0];
    }*/

    /* Renderizo UserInfo section */

    let birthday = user.birthday;
    let edad;
    let hoy = new Date();
    let cumpleanos = new Date(birthday);
    edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    
    let overall = await GetMyOverall();    
    if (!overall) {
        let request = {
            sinceAge: edad-10 < 18? 18 : edad - 10,
            untilAge: edad + 10,
            distance: 15  
        }
    
        let response = await PostMyOverall(request);
        overall = await GetMyOverall();
    }

    userInfo.innerHTML += UserInfoComponent(user.name, mail, user.description, overall.sinceAge, overall.untilAge, overall.distance);

    let psswdModalBtn = document.querySelector("#btn_psswd");
    psswdModalBtn.addEventListener('click', ShowPssWdModal);

    CheckGender(user.gender.genderId);

    let genderBtns = document.querySelectorAll('input[name="gender"]');
    genderBtns.forEach((item) => {
        item.addEventListener('click', ModGender);
    });

    let descriptionText = document.querySelector('#user__input');
    descriptionText.addEventListener('change', ModDescription);

    /* Modal Sobre mi */
    let btnAboutMe = document.querySelector('#btn_about_me');
    btnAboutMe.addEventListener('click', () =>
    {
        modal2.classList.add("modal--show-2");
    });

    /* Overall: edad y distancia */
    lblMinAge = document.querySelector('#lbl_min_age');
    lblMaxAge = document.querySelector('#lbl_max_age');
    lblDistance = document.querySelector('#distance');

    inputMinAge = document.querySelector('#in_min_age');
    inputMaxAge = document.querySelector('#in_max_age');
    
    let min,max;

    inputMinAge.addEventListener('input', async () => {
        lblMinAge.innerHTML = inputMinAge.value + " años";
        min = parseInt(inputMinAge.value);
        max = parseInt(inputMaxAge.value);
        if( max <= min){
            inputMinAge.value = max - 1;
        }
        
        lblMinAge.innerHTML = inputMinAge.value + " años";
        
    });
    inputMinAge.addEventListener('change',  ChangeOverall);

    inputMaxAge.addEventListener('input', async () => {
        min = parseInt(inputMinAge.value);
        max = parseInt(inputMaxAge.value);
        if(max <= min){
            inputMaxAge.value = min + 1;
        }
        lblMaxAge.innerHTML = inputMaxAge.value + " años";
    });
    inputMaxAge.addEventListener('change', (ChangeOverall));

    inputDistance = document.querySelector('#in_distance');

    inputDistance.addEventListener('input', async () => {
        lblDistance.innerHTML = inputDistance.value + " km";
    });

    inputDistance.addEventListener('change', ChangeOverall);
    /* Que busca el usuario */
    let gList;
    let genderPrefArray = await GetCrushGender();

    if(genderPrefArray.length == 0){
        gList = [1,2,3];

        let bodyReq = {
            genderId : 1
        }
        await PostGenderPref(bodyReq);
        bodyReq.genderId = 2;
        await PostGenderPref(bodyReq);
        bodyReq.genderId = 3;
        await PostGenderPref(bodyReq);
    }else{
        gList = genderPrefArray.map((item) => {
            return item.genderId;
        });
    }

    CheckCrushGender(gList);

    const crushGenderChecks = document.querySelectorAll('input[class="crush_gender"]');
    crushGenderChecks.forEach((item) => {
        item.addEventListener('change', ModCrushGender);
    })

    const btnAboutOther = document.querySelector('#btn_about_other');
    btnAboutOther.addEventListener('click', () =>
    {
        modal3.classList.add("modal--show-3");
    });

    /* Modal Intereses */
    RenderPrefModal();
    RenderPrefOtherModal();

    /* Renderizo UserPhotos section */

    RenderUserPhotos(images);
}


window.onload = RenderUser;