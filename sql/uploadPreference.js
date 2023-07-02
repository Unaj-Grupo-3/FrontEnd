import { login } from "../js/services/fetchAuthServices.js";
import { PostMyOverall, PostGenderPref } from "../js/services/fetchPreferenceServices.js" ;
import { GetMyUser } from "../js/services/fetchUserServices.js";

for(let i=1; i<101; i++) {
    let data  = await login({
        "email": `mail${i}@expresso.com`,
        "password": "Express0."
    });

    sessionStorage.setItem("token", data.token);

    let user = await GetMyUser();

    let preferenceRequest  = {
            sinceAge: 18,
            untilAge: 99,
            distance: 1000 
    }

    let genderBody = {
        genderId : 0
    }

    await PostMyOverall(preferenceRequest);

    if(user.gender.genderId == 1){
        genderBody.genderId = 2
    }else if(user.gender.genderId == 2){
        genderBody.genderId = 1
    }else{
        genderBody.genderId = 3
    }

    await PostGenderPref(genderBody);
}