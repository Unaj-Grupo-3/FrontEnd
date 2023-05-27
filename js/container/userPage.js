import { GetMyUser } from "../services/fetchUserServices.js";
import { UserMiniComponent } from "../components/userMini.js";


let image = "";
let userInfo = document.getElementById("user__info");

const RenderUser = async () =>
{
    let user = await GetMyUser();

    if( typeof user.image === 'undefined'){
        image = "http://127.0.0.1:5501/img/user-default.png";
    }
    else{
        image = user.image[0];
    }

    console.log(user);
    userInfo.innerHTML += UserMiniComponent(image, user.name, user.birthday);
}


window.onload = RenderUser;

