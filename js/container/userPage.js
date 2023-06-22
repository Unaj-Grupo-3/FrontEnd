import { GetMyUser, UploadPhoto, ChangeUser } from "../services/fetchUserServices.js";
import { GetMail, PutPasswd } from "../services/fetchAuthServices.js";
import { GetMyOverall, PutMyOverall } from "../services/fetchPreferenceServices.js";
import { UserInfoComponent } from "../components/UserInfoComponent.js";
import { UserPageImg } from "../components/UserPageImg.js";
import { AddPhotoBtn } from "../components/AddPhotoBtn.js";


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
let photoMsj = document.querySelector("#resp_msj_photo");
const modalPsswd = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const changePasswdBtn = document.querySelector("#btn_change_passwd");


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
        console.log("Se cambio el genero");
    }
}

async function ModDescription(e) {

    let request = {
        description: e.target.value
    }

    let response = await ChangeUser(request);

    if(response !== null) {
        console.log("Se cambio la descripcion");
    }
}

const ModPhotos = async () => {

    let photoArray = [];
    let order = document.querySelectorAll(".drag__img");
    console.log("Orden de las fotos");
    order.forEach( (item) => {
        console.log(item.id);
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
        console.log("Error al subir la foto.")
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
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    
}

async function BtnDelete(elements) {
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            console.log(element.parentElement);
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
    console.log("Cerrando modal");
    modalPsswd.classList.remove("modal--show");
});


const ChangePassword = async () => {
    console.log("Cambiando contraseña");
    let psswd = document.querySelector('#in_passwd').value;
    let confirm = document.querySelector('#in_confirm_passwd').value;

    if(psswd === confirm){
        let request = {
            password: psswd
        }

        let response = await PutPasswd(request);
        console.log("Cambiando password");
        console.log(response);
    }
}

changePasswdBtn.addEventListener('click', ChangePassword);

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

async function ChangeOverall() {

    let request = {
        sinceAge: inputMinAge.value,
        untilAge: inputMaxAge.value,
        distance: inputDistance.value  
    }

    let response = await PutMyOverall(request);
}

const RenderUser = async () =>
{
    let user = await GetMyUser();
    let authInfo = await GetMail();
    let images = user.images;


    userInfo.innerHTML = '';
    userPhotoSection.innerHTML = '';

    console.log("Usuario");
    console.log(user.gender.genderId);
    /*if( typeof user.image === 'undefined'){
        image = "http://127.0.0.1:5501/img/user-default.png";
    }
    else{
        image = user.image[0];
    }*/

    /* Renderizo UserInfo section */
    let overall = await GetMyOverall();
    userInfo.innerHTML += UserInfoComponent(user.name, authInfo.email, user.description, overall.sinceAge, overall.untilAge, overall.distance);

    let psswdModalBtn = document.querySelector("#btn_psswd");
    psswdModalBtn.addEventListener('click', ShowPssWdModal);

    CheckGender(user.gender.genderId);

    let genderBtns = document.querySelectorAll('input[name="gender"]');
    genderBtns.forEach((item) => {
        item.addEventListener('click', ModGender);
    });

    let descriptionText = document.querySelector('#user__input');
    descriptionText.addEventListener('change', ModDescription);

    lblMinAge = document.querySelector('#lbl_min_age');
    lblMaxAge = document.querySelector('#lbl_max_age');
    lblDistance = document.querySelector('#distance');


    /* Overall: edad y distancia */
    inputMinAge = document.querySelector('#in_min_age');
    inputMinAge.addEventListener('input', async () => {
        lblMinAge.innerHTML = inputMinAge.value;
    });
    inputMinAge.addEventListener('change', ChangeOverall);

    inputMaxAge = document.querySelector('#in_max_age');
    inputMaxAge.addEventListener('input', async () => {
        lblMaxAge.innerHTML = inputMaxAge.value;
    });
    inputMaxAge.addEventListener('change', ChangeOverall);

    inputDistance = document.querySelector('#in_distance');
    inputDistance.addEventListener('input', async () => {
        lblDistance.innerHTML = inputDistance.value + " km";
    });
    inputDistance.addEventListener('change', ChangeOverall);


    /* Renderizo UserPhotos section */

    images.forEach((element, index) => {

        userPhotoSection.innerHTML += UserPageImg(index, user.images[index].id, user.images[index].url);
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


window.onload = RenderUser;