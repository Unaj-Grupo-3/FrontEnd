import { UploadPhoto } from "../js/services/fetchUserServices.js";
import { login } from "../js/services/fetchAuthServices.js";

for (let index = 1; index < 101; index++) {
    let data  = await login({
        "email": `mail${index}@expresso.com`,
        "password": "Express0."
    });

    console.log(data.token);
    sessionStorage.setItem("token", data.token);

    let photo = `../sql/images/${index}.jpg`;

    console.log(photo);

    //await UploadPhoto(photo);

}