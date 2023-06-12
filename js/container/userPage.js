import { GetMyUser } from "../services/fetchUserServices.js";
import { GetMail } from "../services/fetchAuthServices.js";
import { UserMiniComponent } from "../components/userMini.js";
import { UserInfoComponent } from "../components/UserInfoComponent.js";


let image = "";
let userInfo = document.querySelector(".user__info");
let dragContainers = document.querySelectorAll(".drag__container");
let imgContainers = document.querySelectorAll(".drag__img");

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    console.log(document.getElementById(data));
    ev.target.appendChild(document.getElementById(data));
    console.log("Padre: "+ ev.target);
}

dragContainers.forEach((element) => {
    element.addEventListener("dragover", (e) => {allowDrop(e)});
    element.addEventListener("drop", (e) => {
        drop(e);
        console.log("Fue tirado");
    });
});

imgContainers.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
        drag(e);
        console.log("Fue arrastrado");
    });
});

const RenderUser = async () =>
{
    let user = await GetMyUser();
    let authInfo = await GetMail();
    /*if( typeof user.image === 'undefined'){
        image = "http://127.0.0.1:5501/img/user-default.png";
    }
    else{
        image = user.image[0];
    }*/

    userInfo.innerHTML += UserInfoComponent(user.name, authInfo.email, user.description);
}


window.onload = RenderUser;

