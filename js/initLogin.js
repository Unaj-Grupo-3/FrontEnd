import { login } from "./services/fetchAuthServices.js";

const Redirect = () => 
{
    console.log("Inicio de sesión exitoso");
}


document.addEventListener("submit", function(e)
{

    e.preventDefault();

    const {target} = e;

    if(target.matches("#loginForm")) {

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let auth = {
            email: email,
            password: password
        }

        login(auth, Redirect);
    }
})