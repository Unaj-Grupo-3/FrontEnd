
import { login } from "../js/services/fetchAuthServices.js";
import { UploadPhoto } from "../js/services/fetchUserServices.js";


let inputArchivo = document.getElementById("inputArchivo");


inputArchivo.addEventListener("change", async function() {

  // Obtener la lista de archivos seleccionados
  let archivos = inputArchivo.files;


  // Recorrer los archivos seleccionados
  for (let i = 0; i < archivos.length; i++) {
    let data  = await login({
        "email": `mail${i+1}@expresso.com`,
        "password": "Express0."
    });
    console.log(i+" "+data.token);
    sessionStorage.setItem("token", data.token); 

    console.log(archivos[i]);
    let form = new FormData();
    form.append('file', archivos[i]);

    await UploadPhoto(form);
  }
});
