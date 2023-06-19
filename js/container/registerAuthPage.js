import { CreateAuth } from "../services/fetchAuthServices.js";




export const addEventListenerAuth = () =>{

    document.addEventListener("click", (e) =>{
        if(e.target.matches(".icon_password")){
            if(e.target.textContent == "visibility"){
                e.target.textContent = "visibility_off"
                document.getElementById(e.target.title).type = "password"
            }else{
                e.target.textContent = "visibility"
                document.getElementById(e.target.title).type = "text"
            }
        }
    })

    document.getElementById("formAuth").addEventListener("submit",async (e) =>{
        e.preventDefault();

        let mail = document.getElementById("inputMail").value;
        let password = document.getElementById("inputPassword").value;
        let password2 = document.getElementById("inputPassword2").value;

        let isValid = false;

        if(1){

        }

        if(false){ // CHECKS Validar values

            let auth = {
                email: mail,
                password : password
            }
    
           let response = await CreateAuth(auth);

            console.log(response);

        }

    })
}


