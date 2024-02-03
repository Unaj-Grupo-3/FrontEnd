import { PutPasswd } from "../../services/fetchAuthServices.js";


const modalPsswd = document.querySelector(".modal");

export async function ShowPssWdModal() {

    modalPsswd.classList.add("modal--show");
};

export const ChangePassword = async () => {

    let passwdMsjCont = document.querySelector('#response__msj');
    let passwd = document.querySelector('#old_passwd').value;
    let newPasswd = document.querySelector('#in_passwd').value;
    let confirm = document.querySelector('#in_confirm_passwd').value;

    if(newPasswd === confirm){
        let request = {
            password: passwd,
            newPassword: newPasswd,
            repeatNewPassword: confirm
        }

        let response = await PutPasswd(request);

        passwdMsjCont.innerHTML = response;
        passwdMsjCont.style.display = "block";
        setTimeout(() => {
            passwdMsjCont.style.display = "none";
            modalPsswd.classList.remove("modal--show");
        }, 3000);
    } else{
        passwdMsjCont.innerHTML = "Las contraseñas no son iguales.";
        passwdMsjCont.style.display = "block";
        setTimeout(() => {
            passwdMsjCont.style.display = "none";
        }, 3000);
    }
}