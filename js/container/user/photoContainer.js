import { ChangeUser, UploadPhoto } from "../../services/fetchUserServices.js";
import { RenderUserPhotos } from "../userPage.js";

let dragSrcEl;

export const ModPhotos = async () => {

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


export const AddPhoto = async () => {

    let inputFile = document.getElementById('input_id');
    let photoMsj = document.querySelector("#resp_msj_photo");
    const formData = new FormData();
    formData.append('file', inputFile.files[0]);
    let response = await UploadPhoto(formData);

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


export async function BtnDelete(elements) {
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
            ModPhotos();
        })
    })
}


/* Drag & Drop */
export function handleDragStart(e) {

    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

export function handleDragEnd(e) {

    this.style.opacity = '1';

    items.forEach(function (item) {
        item.classList.remove('over');
    });
}

export function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

export function handleDragEnter(e) {
    this.classList.add('over');
}

export function handleDragLeave(e) {
    this.classList.remove('over');
    this.style.opacity = '1';
}

export function handleDrop(e) {
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
