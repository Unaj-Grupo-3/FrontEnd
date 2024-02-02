import { addEventListenerRegisterProfile } from "../container/registerProfile.js";
import { GetMyUser } from "../services/fetchUserServices.js";


let myUser = await GetMyUser();
console.log("My user");
console.log(myUser);

if(myUser?.userId){
    window.location = '../../views/UserPage.html'
}

if(myUser?.status == 401){
    sessionStorage.removeItem('token');
    window.location = '../../views/AuthRegister.html'
}


addEventListenerRegisterProfile();