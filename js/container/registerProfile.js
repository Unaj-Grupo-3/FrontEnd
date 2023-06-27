
import {CreateUser} from '../services/fetchUserServices.js';


export  async function addEventListenerRegisterProfile(){

    const generoRadios = document.querySelectorAll('.genero-container input[type="radio"]');

        generoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                sessionStorage.setItem('gender', radio.value);
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
    
                        console.log("Ciudad: " + city);
                        console.log("Provincia: " + province);
                        console.log("País: " + country);
    
    
                        location.city = city;
                        location.province = province;
                        location.country = country;
                        location.latitude = latitude;
                        location.longitude = longitude; 
    
                        sessionStorage.setItem("locations", JSON.stringify(location));
                        
                        document.getElementById("inputUbicacion").value = "Ubicacion Actual"; 
    
                    } else {
                        console.log("No se encontraron resultados");
                    }
                } else {
                    console.log("Error");
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

        name = document.getElementById("inputNombre").value;
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
            
            setTimeout(() =>{
                window.location = "../../views/PhotoRegister.html"
            },2000);
            // Redireccion a la pagina para completar las fotos.
        }

        
    });
}


function removePrefix(provinceName) {
  var prefixes = ["Provincia", "de"];

  let newName = provinceName.replace("Provincia de", "");
  
  return newName;
}
