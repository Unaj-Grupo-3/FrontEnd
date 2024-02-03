import { ChangeUser } from "../../services/fetchUserServices.js";
import { DeleteSuggestion } from "../../services/fetchSuggestionServices.js";
import { PostGenderPref, DeleteGenderPref } from "../../services/fetchPreferenceServices.js";

export async function ModGender(e) {

    let request = {
        gender: parseInt(e.target.value)
    }

    let response = await ChangeUser(request);
}

export async function ModCrushGender(e) {

    let response;
    let request = {
        genderId: parseInt(e.target.value)
    }

    if(e.target.checked) {
        response = await PostGenderPref(request);
    } else {
        response = await DeleteGenderPref(request);
    }
    await DeleteSuggestion(0);  //A suggestion microservice
}

export async function CheckGender(value) {

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

export async function CheckCrushGender(genderList) {

    if(genderList.includes(1)) {
        document.querySelector("#crush_male").checked = true;
    }
    if(genderList.includes(2)) {
        document.querySelector("#crush_female").checked = true;
    }
    if(genderList.includes(3)) {
        document.querySelector("#crush_other").checked = true;
    }
}