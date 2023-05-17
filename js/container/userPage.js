import { GetMyUser } from "../services/fetchUserServices.js";
import { UserMiniComponent } from "../components/userMini.js";

let userInfo;

const RenderUser = (data) =>
{
    let image = data.image;
    let name = data.name;
    let te = data.birthday.indexOf('T');
    let birthday = data.birthday(0, te);

    userInfo.innerHtml += UserMiniComponent(image, name, birthday);
}


export const UserPageRender = () =>
{
    console.log("UserPageRender");
    GetMyUser(RenderUser);
}