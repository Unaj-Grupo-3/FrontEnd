import { login } from "../services/fetchAuthServices.js";
import { GetMyUser } from "../services/fetchUserServices.js";

const Redirect = (user) => 
{
    debugger;
    // !Existe un usuario con esta cuenta
    if(user?.userId){
        window.location.href = "../../views/Matches.html";
    };   

    // !No existe un usuario con esta cuenta
    if(user?.status){
        window.location.href = "../../views/PerformanceRegister.html";
    };
    

}




document.addEventListener("submit", async function(e)
{
    let msj = document.querySelector("#response__msj");
    e.preventDefault();

    const {target} = e;

    if(target.matches("#login__form")) {

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let auth = {
            email: email,
            password: password
        }

        let resp = await login(auth);
        if(resp == null){
            msj.innerHTML = "El mail o la contraseña son incorrectas.";
            msj.style.color = "#F02E3A";
            msj.style.display = 'block';
        }else{
            console.log(resp);
            msj.innerHTML = "Te has conectado exitosamente.";
            msj.style.color = "#41BC02";
            msj.style.display = 'block';
            
            sessionStorage.setItem("token", resp.token);
            
            let user = await GetMyUser();

            setTimeout(() => {
                Redirect(user);
            }, 1000);
        }
    }
})