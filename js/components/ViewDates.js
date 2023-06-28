import { GetUserById } from "../services/fetchUserServices.js"
import { distance } from "../utils/distance.js";

const ProfileCard= (name, rootImage,id, idMatch) =>
`
<div class="Profile-Card">
    <div onclick="prueba(${idMatch})" class="div-click-profile">
        <img id="PhotoProfile" src="${rootImage? rootImage : '../../img/user-default.png'}" alt="alien">
        <div id="Shadow-Name-Profile"> 
            <div id="Name-Profile"> ${name} </div>  
        </div>
    </div>
    <button class="button-class-date" id="New-Date ${id}"> Nueva Cita </button>
</div>
`;

const DatesCard = async (userMe, date) => {
    console.log(date)
    const user2 = date.match.user1 == userMe.userId ? date.match.user2 : date.match.user1;
    let anotherUser = await GetUserById(user2); 
    console.log(anotherUser[0])
    const lat1 = userMe.location.latitude;
    const lon1 = userMe.location.longitude;
    const lat2 = anotherUser[0].location.latitude;
    const lon2 = anotherUser[0].location.longitude;

    const distancia = distance (lat1, lon1, lat2, lon2);
    console.log(`La distancia entre los dos puntos es: ${Math.round(distancia)} kilómetros`);
  
        return  `
        <article class="dateDetail">
            <div class="dateDetail__content">
    
                <div class="dateDetail_content_user">
                    <h4>Datos del Usuario</h4>
                    <p>Fecha de nacimiento: ${anotherUser[0].birthday}</p>
                    <img src=${anotherUser[0].images[0].url} alt=${anotherUser[0].name}>
                    <p>User2: ${anotherUser[0].name} ${anotherUser[0].lastName}</p>
                </div>

                <div class="dateDetail_content_detail">
                    <h4>Datos de la cita</h4>
                    <p>DateId: ${date.dateId}</p>
                    <p>Lugar: ${date.location}</p>
                    <p>Descripcion: ${date.description}</p>
                    <p>Hora: ${date.time}</p>
                </div>
                    <div class="dateDetail_content_map">
                        <h4>Aca va el mapa</h4>
                    </div>
            </div>
    
            ${date.state == 0 ? 
            `<div class="dateDetail__button">
                <button id="acceptDate">Aceptar</button>
                <button id="cancelDate">Cancelar</button>
            </div>`
            :
            `<div class="dateDetail_status">
                <h4>Estado: ${date.state == 1 ? 'Aceptada' : 'Rechazada'}</h4>
            </div>`
            }
        </article>
        `
    }
    
export { ProfileCard, DatesCard };

function prueba(idMatch)
{
    alert("Hola" + idMatch);

}

window.prueba=prueba;