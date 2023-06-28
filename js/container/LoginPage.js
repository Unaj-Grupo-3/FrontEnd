import { login } from "../services/fetchAuthServices.js";
import { GetMyUser } from "../services/fetchUserServices.js";

const Redirect = () => 
{
    window.location.href = "../../views/Matches.html";
}


document.addEventListener("submit", async function(e)
{
    const msj = document.querySelector("#response__msj");
    e.preventDefault();

    const {target} = e;

    if(target.matches("#login__form")) {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const auth = {
            email: email,
            password: password
        }

        const resp = await login(auth);
        if(resp == null){
            msj.innerHTML = "email o contraseña incorrecto.";
            setTimeout(() => {
                msj.innerHTML = "";
            }, 1000);
        }else{
            sessionStorage.setItem("token", resp.token);
            setTimeout(() => { Redirect();}, 1000);    
        }
    }
})