import { Loader } from "../components/spinner.js";
import { CreateAuth, login } from "../services/fetchAuthServices.js";
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
            let parrafo=document.getElementById("errorMail");
            parrafo.textContent="El mail ingresado es inválido";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }
        if(!validatePassword(password)){
            
            isValid=false;
            let parrafo=document.getElementById("errorPassword");
            parrafo.textContent="La contraseña es inválida";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }
        if(password!=password2){
            
            isValid=false;
            let parrafo=document.getElementById("errorPassword2");
            parrafo.textContent="Las contraseñas no coinciden";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }

        if(isValid){ // CHECKS Validar values
            let auth = {
                email: mail,
                password : password
            }
            document.getElementById("step-1").innerHTML = `<div class="spinner"></div>`;
            

            let response = await CreateAuth(auth);
  

            if(response.response.Mail2){
                
                document.getElementById("step-1").innerHTML = `<h2>Paso 1</h2><p>Registro</p>`;
                let parrafo=document.getElementById("errorMail");
                parrafo.textContent="El mail ingresado ya se encuentra registrado";
                parrafo.style.color = "#F02E3A";
                parrafo.style.display = 'block';
                // document.getElementById("buttonSubmit").innerHTML = "Registrarse";
            }else{
                document.getElementById("step-1").innerHTML = `<h2>Paso 1</h2><p>Registro</p>`;
               let loginResponse = await login(auth);

                if(loginResponse){
                    sessionStorage.setItem("token", loginResponse.token);
                }
                
                window.location = "../../views/PerformanceRegister.html"

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


