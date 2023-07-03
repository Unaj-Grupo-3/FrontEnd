import { login } from "../js/services/fetchAuthServices.js";
import { PostMyOverall, PostGenderPref, PostPreference } from "../js/services/fetchPreferenceServices.js" ;
import { GetMyUser } from "../js/services/fetchUserServices.js";

for(let i=1; i<101; i++) {
    let data1  = await login({
        "email": `mail${i}@expresso.com`,
        "password": "Express0."
    });

    sessionStorage.setItem("token", data1.token);
    for(let j = 0; j < 20; j++) {

        let typeInterest =  Math.floor(Math.random() * 3) + 1;;
        let interestId = Math.floor(Math.random() * 82) + 1;

        let interestLoad = [];

        while(interestLoad.includes(interestId)) {
            interestId = Math.floor(Math.random() * 82) + 1;
        }

        let interestBody = {
            interestId: interestId,
            ownInterest: false,
            like: true
        }

        if(typeInterest == 1){
            interestBody.ownInterest = true;
            interestBody.like = false ;
        }else if(typeInterest == 2){
            interestBody.ownInterest = true;
            interestBody.like = true ;
        }else if(typeInterest == 3){
            interestBody.ownInterest = false;
            interestBody.like = true ;
        }

        let data = await PostPreference(interestBody);
        console.log(data);
    }
}


function getEdad(birthday){
    var hoy = new Date();
        var cumpleanos = new Date(birthday);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

        return edad;
}