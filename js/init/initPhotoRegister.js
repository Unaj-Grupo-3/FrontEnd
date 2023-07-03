import { UploadPhoto, GetMyUser, ChangeUser } from "../services/fetchUserServices.js";
import { AddPhotoBtn } from "../components/AddPhotoBtn.js";
import { UserPageImg } from "../components/UserPageImg.js";
import { validateFile } from "../validators/fileValidate.js";




let userInfo = document.querySelector(".user__info");
let userPhotoSection = document.querySelector("#photo_section");
let dragSrcEl;
let inputFile;

let photoMsj = document.querySelector("#resp_msj_photo");

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

const AddPhoto = async (target) => {

    let validResponse = validateFile(target.files[0]) ;

    let isValid = validResponse.valid;

    if(!isValid){

        photoMsj.innerHTML = validResponse.error;
        photoMsj.style.color = "#F02E3A";
        photoMsj.style.display = "block";
        return;
    }

    console.log("La foto es valida");

    const formData = new FormData();

    formData.append('file', target.files[0]);

    let response = await UploadPhoto(formData); // Quizas no deberia subirla

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
            userPhotoSection.innerHTML += AddPhotoBtn();
            ModPhotos();
        })
    })

    
}

let imagesCount = 0;


let myUser = await GetMyUser();

if(myUser?.status == 401){
    sessionStorage.removeItem('token');
    window.location = '../../views/AuthRegister.html';
}

if(myUser?.status == 404){
    window.location = '../../views/performanceRegister.html';
}

let images = myUser.images;

images.forEach((element, index) => {

    userPhotoSection.innerHTML += UserPageImg(index, myUser.images[index].id, myUser.images[index].url);
    imagesCount++;
});
console.log(imagesCount);

for(let i = imagesCount; i < 6; i++){
    userPhotoSection.innerHTML += AddPhotoBtn();
}

    let items = document.querySelectorAll('.user__photos .drag__container');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });

    // inputFile = document.getElementById('input_id');
    // inputFile.addEventListener('input', AddPhoto);

    document.addEventListener("input", (e) => {

        let {target} = e;        
        AddPhoto(target);
    })

    BtnDelete(document.querySelectorAll(".btn_delete"));


    document.addEventListener("click", (e) => {
        let {target} = e;

        if(target.matches(".btn_delete")){
            console.log("ALGO");
            userPhotoSection.innerHTML += AddPhotoBtn();
        }

        if(target.matches("#buttonSubmit")){
            window.location = "../../views/PreferenceRegister.html"
        }

    });

