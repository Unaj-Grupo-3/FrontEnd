import { GetUserById } from "../../services/fetchUserServices.js"
import { distance } from "../../utils/distance.js";

//https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar%20in%20varela&key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU

const DatesCard = async (userMe, date) => {
    console.log(date)
    const user2 = date.match.user1 == userMe.userId ? date.match.user2 : date.match.user1;
    let anotherUser = await GetUserById(user2); 
    const lat1 = userMe.location.latitude;
    const lon1 = userMe.location.longitude;
    const lat2 = anotherUser[0].location.latitude;
    const lon2 = anotherUser[0].location.longitude;

    const kilometros = distance (lat1, lon1, lat2, lon2);
    console.log(Math.round(kilometros));
    
    const birth = new Date (anotherUser[0].birthday)
    const current = new Date()
    let age = current.getFullYear() - birth.getFullYear(); //2023 - 1997 = 26
    if (current.getMonth() < birth.getMonth() || (current.getMonth() == birth.getMonth() && current.getDate() < birth.getDate())) { 
        //mes actual - mes de nac ||//mes actual = mes de nac & dia actual < dia nac -> no cumplio
        age--;
    } /*else if ((current.getMonth() == birth.getMonth() && current.getDate() < birth.getDate())) {
        age--;
    }*/


    /*VER STATUS 
    Si date.user1 = userMe --> El otro user debe aceptar o rechazar


    
    */
        return  `
        <article class="dateDetail">
            <div class="dateDetail__content">
    
                <div class="dateDetail_content_user">
                    <img src=${anotherUser[0].images[0].url} alt=${anotherUser[0].name}>
                    <h4>${anotherUser[0].name} ${anotherUser[0].lastName}, ${age}</h4>
                </div>

                <div class="dateDetail_content_detail">
                    <h4>Datos de la cita</h4>
                    <p>DateId: ${date.dateId}</p>
                    <p>Lugar: ${date.location}</p>
                    <p>Descripcion: ${date.description}</p>
                    <p>Hora: ${date.time}</p>
                    ${date.state != 0 ? 
                    `<div class="dateDetail__button">
                        <button id="acceptDate">Aceptar</button>
                        <button id="cancelDate">Cancelar</button>
                    </div>`
                    :
                    `<div class="dateDetail_status">
                        <h4>Estado: ${date.state == 1 ? 'Aceptada' : 'Rechazada'}</h4>
                    </div>`
                    }
                </div>
            </div>

            <div class="dateDetail_content_map">
                <img src="../../../img/map.png" alt="Ubicacion del lugar">
            </div>
        </article>
        `
    }
    
export default DatesCard;
