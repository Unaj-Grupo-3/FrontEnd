
import {CreateUser} from '../services/fetchUserServices.js';
import { validateNombre } from '../validators/nombreValidate.js';
import {validateBirthday} from '../validators/cumpleañosValidate.js';

export  async function addEventListenerRegisterProfile(){
    sessionStorage.removeItem('gender');
    const generoRadios = document.querySelectorAll('.genero-container input[type="checkbox"]');

        generoRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    generoRadios.forEach(radio2 => {
                        if(radio2.checked  && radio2.id != radio.id) {
                            radio2.checked = false;
                        }
                    })
                    sessionStorage.setItem('gender', radio.value);
                    let parrafo=document.getElementById("errorGenero");
                    parrafo.textContent="";
                
                }
            });
        });

    document.getElementById("myLocation").addEventListener("click", (e) => {
        

        let {target} = e;
        
        if(target.textContent == "my_location"){

            // Setear la ubicacion
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showCoordinates);
              } else {
                console.log("La geolocalización no es soportada por este navegador.");
              }
              
            function showCoordinates(position) {
    
                let location = {
                    latitude: 0,
                    longitude: 0,
                    city: "",
                    province: "",
                    country: ""
                }
    
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
    
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(latitude, longitude);
    
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var city, province, country;
    
                        for (var i = 0; i < results[0].address_components.length; i++) {
                            var addressComponent = results[0].address_components[i];
                            var types = addressComponent.types;
    
                            if (types.includes('administrative_area_level_2')) {
                                city = addressComponent.long_name;
                            }
    
                            if (types.includes('administrative_area_level_1')) {
                                province = addressComponent.long_name;
                                province = removePrefix(province);
                            }
    
                            if (types.includes('country')) {
                                country = addressComponent.long_name;
                            }
                        }    
    
                        location.city = city;
                        location.province = province;
                        location.country = country;
                        location.latitude = latitude;
                        location.longitude = longitude; 
    
                        sessionStorage.setItem("locations", JSON.stringify(location));
                        
                        document.getElementById("inputUbicacion").value = "Ubicacion Actual"; 
    
                    } else {
                        //console.log("No se encontraron resultados");
                    }
                } else {
                    
                }
                });
            }

            document.getElementById("inputUbicacion").disabled = true;

            e.target.title = "Quitar ubicacion actual";

            e.target.innerHTML = "location_disabled";
        }else{

            document.getElementById("inputUbicacion").disabled = false;

            e.target.innerHTML = "my_location";

            document.getElementById("inputUbicacion").value = ""; 

            e.target.title = "Ingresar ubicacion actual";

            sessionStorage.removeItem("locations");
        }

    });

    document.getElementById("user-profile").addEventListener("submit", async (e) =>{

        e.preventDefault();
        
        let name = "";
        let lastname = "";
        let birthdate = "";
        let location = "";
        let gender = "";
        let description = "";

        name = document.getElementById("inputName").value;
        lastname = document.getElementById("inputApellido").value;
        birthdate = document.getElementById("inputCumpleaños").value;
        gender = sessionStorage.getItem("gender");

        description = document.getElementById("inputDescripcion").value ? document.getElementById("inputDescripcion").value : " ";

        if(document.getElementById("inputUbicacion").value == "Ubicacion Actual"){
            location = JSON.parse((sessionStorage.getItem("locations"))) ;
        }else{
            location = {
                city : document.getElementById("inputUbicacion").value
            }
        }
       
        let isValid = true;

        if(!validateNombre(name)){
            
            isValid=false;
            
            let parrafo=document.getElementById("errorName");
            parrafo.textContent="A ingresado caracteres invalidos";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }

        if(!validateNombre(lastname)){
            
            isValid=false;
            
            let parrafo=document.getElementById("errorApellido");
            parrafo.textContent="A ingresado caracteres invalidos";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }
        if(!validateBirthday(birthdate)){
            
            isValid=false;
            
            let parrafo=document.getElementById("errorCumpleaños");
            parrafo.textContent="La edad debe ser mayor a 18 años";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }
        if(!gender){
            isValid=false;
            
            let parrafo=document.getElementById("errorGenero");
            parrafo.textContent="Debe seleccionar un genero";
            parrafo.style.color = "#F02E3A";
            parrafo.style.display = 'block';
        }

        if(isValid){
            document.getElementById("step-2").innerHTML = '<div class="spinner"></div>'
            let body = {
                name : name,
                lastname : lastname,
                birthday : birthdate,
                gender : gender,
                location : location,
                description : description
            }
    
            let response = await CreateUser(body);
    
            if(response){
                document.getElementById("step-2").innerHTML = '<h2>Paso 2</h2> <p>Perfil</p>'
                setTimeout(() =>{
                    window.location = "../../views/PhotoRegister.html"
                },2000);
                // Redireccion a la pagina para completar las fotos.
            }

            document.getElementById("step-2").innerHTML = '<h2>Paso 2</h2> <p>Perfil</p>'
        }


        
    });

    document.addEventListener("keyup", (e) => {
        
        let{target}=e;
        
        if(target.matches("#inputCumpleaños")){
            document.getElementById("errorCumpleaños").textContent=" ";

        }
        if(target.matches("#inputApellido")){
            document.getElementById("errorApellido").textContent=" ";

        }
        if(target.matches("#inputName")){
            document.getElementById("errorName").textContent=" ";

        }
        
        
    });
}


function removePrefix(provinceName) {
  var prefixes = ["Provincia", "de"];

  let newName = provinceName.replace("Provincia de", "");
  
  return newName;
}

document.getElementById("inputName").addEventListener("blur", (e) => {
    document.getElementById("inputApellido").focus();
});

document.getElementById("inputApellido").addEventListener("blur", (e) => {
    document.getElementById("inputCumpleaños").focus();
});

document.getElementById("inputCumpleaños").addEventListener("blur", (e) => {
    document.getElementById("inputGenero").focus();
});

document.getElementById("inputGenero2").addEventListener("blur", (e) => {
    document.getElementById("inputUbicacion").focus();
});

document.getElementById("inputUbicacion").addEventListener("blur", (e) => {
    document.getElementById("inputDescripcion").focus();
});


