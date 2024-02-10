import { GetMyUser } from "../services/fetchUserServices.js";
import { GetMyOverall, PostMyOverall, GetCrushGender, PostGenderPref, GetInterest } from "../services/fetchPreferenceServices.js";
import { UserInfoComponent, PrefComponent, InterestTag } from "../components/UserInfoComponent.js";
import { UserPageImg } from "../components/UserPageImg.js";
import { AddPhotoBtn } from "../components/AddPhotoBtn.js";
import { ShowPssWdModal, ChangePassword } from "./user/passwordContainer.js";
import { DecodeToken } from "../utils/decode.js";
import { ModGender } from "./user/genderContainer.js";
import { ModCrushGender } from "./user/genderContainer.js";
import { ModDescription } from "./user/descriptionContainer.js";
import { CheckGender, CheckCrushGender } from "./user/genderContainer.js";
import { ChangeOverall } from "./user/overallContainer.js";
import { ShowMyInterest, InterestOnClick } from "./user/preferencesContainer.js";
import { AddPhoto, BtnDelete } from "./user/photoContainer.js";
import { handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDragLeave, handleDrop } from "./user/photoContainer.js";


let userInfo = document.querySelector(".user__info");
let userPhotoSection = document.querySelector("#photo_section");
const modalPsswd = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const changePasswdBtn = document.querySelector("#btn_change_passwd");
const modal2 = document.querySelector('.modal_2');


/* Change Password Container */
modalCloseBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    modalPsswd.classList.remove("modal--show");
});

changePasswdBtn.addEventListener('click', ChangePassword);


/* Modal Interests methods */
async function CloseModal()
{
    if(modal2.classList.contains("modal--show-2"))
    {
        modal2.classList.remove("modal--show-2");
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
        });
    })

    modalCloseGral2.addEventListener('click', CloseModal);

    let tagContainers = document.querySelectorAll('.interest_item');
    tagContainers.forEach((item) =>{
        item.addEventListener('click', InterestOnClick);
    });

    ShowMyInterest();
}


export async function RenderUserPhotos(photoList) {

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

    let inputFile = document.getElementById('input_id');
    inputFile.addEventListener('input', AddPhoto);

    BtnDelete(document.querySelectorAll(".btn_delete"));
}


const RenderUser = async () =>
{
    let user = await GetMyUser();

    const jwtToken = sessionStorage.getItem("token");
    const claims = await DecodeToken(jwtToken);

    let mail = claims.Mail;
    let images = user.images;

    userInfo.innerHTML = '';
    userPhotoSection.innerHTML = '';

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

    //Change passwd section
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
    let lblMinAge = document.querySelector('#lbl_min_age');
    let lblMaxAge = document.querySelector('#lbl_max_age');
    let lblDistance = document.querySelector('#distance');

    let inputMinAge = document.querySelector('#in_min_age');
    let inputMaxAge = document.querySelector('#in_max_age');
    
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

    let inputDistance = document.querySelector('#in_distance');

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
    } else {
        gList = genderPrefArray.map((item) => {
            return item.genderId;
        });
    }

    CheckCrushGender(gList);

    const crushGenderChecks = document.querySelectorAll('input[class="crush_gender"]');
    crushGenderChecks.forEach((item) => {
        item.addEventListener('change', ModCrushGender);
    })

    /* Modal Intereses */
    RenderPrefModal();

    /* Renderizo UserPhotos section */
    RenderUserPhotos(images);
}


window.onload = RenderUser;