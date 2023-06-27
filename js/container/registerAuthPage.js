import { Loader } from "../components/spinner.js";
import { CreateAuth } from "../services/fetchAuthServices.js";
import { validate } from "../validators/emailValidate.js";
import { validatePassword } from "../validators/passwordValidate.js";

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
        let isValid = true;

        if(!validate(mail)){
            
            isValid=false;
            console.log("mail invalido");
            let parrafo=document.getElementById("errorMail");
            parrafo.textContent="El mail ingresado es invalido";
        }
        if(!validatePassword(password)){
            
            isValid=false;
            console.log("password invalido");
            let parrafo=document.getElementById("errorPassword");
            parrafo.textContent="El password ingresado es invalido";
        }
        if(password!=password2){
            
            isValid=false;
            console.log("password_2 invalido");
            let parrafo=document.getElementById("errorPassword2");
            parrafo.textContent="Las contraseñas no coinciden";
        }

        if(isValid){ // CHECKS Validar values
            console.log("mail esta siendo creado");
            let auth = {
                email: mail,
                password : password
            }
            document.getElementById("buttonSubmit").disable = true;
            document.getElementById("buttonSubmit").innerHTML = Loader() + "Registrarse";

            let response = await CreateAuth(auth);
            
            if(response.response.Mail2){
                console.log("Mail con errors");
                let parrafo=document.getElementById("errorMail");
                parrafo.textContent="El mail ingresado ya se encuentra registrado";
                document.getElementById("buttonSubmit").innerHTML = "Registrarse";
            }else{

                let modal = new bootstrap.Modal( document.getElementById("modalRegister") );

                modal.show();

                setTimeout(() => {
                    window.location = "../../views/Login.html"
                }
                ,1500);
            }
        }
    })

    document.addEventListener("keyup", (e) => {
        
        let{target}=e;
        
        if(target.matches("#inputMail")){
            document.getElementById("errorMail").textContent=" ";

        }
        if(target.matches("#inputPassword")){
            document.getElementById("errorPassword").textContent=" ";

        }
        if(target.matches("#inputPassword2")){
            document.getElementById("errorPassword2").textContent=" ";

        }
        
    })
    

}


