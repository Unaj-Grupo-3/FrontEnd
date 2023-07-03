import { GetUserById } from "../../services/fetchUserServices.js"
import { distance } from "../../utils/distance.js";

//https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar%20in%20varela&key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU

const DatesCard = async (userMe, date) => {
    const user2 = date.match.user1 == userMe.userId ? date.match.user2 : date.match.user1;
    let anotherUser = await GetUserById(user2); 
    const lat1 = userMe.location.latitude;
    const lon1 = userMe.location.longitude;
    const lat2 = anotherUser[0].location.latitude;
    const lon2 = anotherUser[0].location.longitude;

    const kilometros = distance (lat1, lon1, lat2, lon2);
    //console.log(Math.round(kilometros));
    
    //Edad
    const today = new Date()
    const birth = new Date (anotherUser[0].birthday)
    let age = today.getFullYear() - birth.getFullYear(); //2023 - 1997 = 26
    if (today.getMonth() < birth.getMonth() || (today.getMonth() == birth.getMonth() && today.getDate() < birth.getDate())) { 
        age--;
        //mes actual - mes de nac ||//mes actual = mes de nac & dia actual < dia nac -> no cumplio
    } 
    
    //Dias para la cita
    const dateTime = new Date(date.time)

    const meses = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre'
    }

    const restan = Math.ceil((dateTime.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));


    let message;
    switch (date.state) {
        case -1:
            message = 'Rechazada.';
            break;
        case 0:
            message = 'Esperando confirmacion';
            break;
        case 1:
            message = 'Confirmada';
            break;
    }

    return  `
        <article class="dateDetail">
            <div class="dateDetail__content">
                <h4 class="dateDetail__contentTitle" >Tienes una cita</h4>
            
                <div class="dateDetail_content_user">
                <img src=${anotherUser[0].images[0].url} alt=${anotherUser[0].name}>
                    <h4 class="dateDetail__contentUser">${anotherUser[0].name} ${anotherUser[0].lastName}, ${age}</h4>
                </div>
                
                <div class="dateDetail_content_detail">
                    <h5 class="dateDetail__contentText">Fecha: ${dateTime.getDate()} de ${meses[dateTime.getMonth()]} de ${dateTime.getFullYear()}</h5>
                    <h5 class="dateDetail__contentText">Hora: ${dateTime.getHours()}${dateTime.getMinutes()>0 ? `:${dateTime.getMinutes()}` : ''} horas</h5>
                    <h5 class="dateDetail__contentText">Lugar: ${date.description}</h5>                  
                </div>
            </div>
                    
            <div class="dateDetail_content_map">
            ${restan == 0 ? `<h4 class="dateDetail__contentFaltan">Es hoy!</h4>` : 
            (restan > 0 ? `<h4 class="dateDetail__contentFaltan">Faltan ${restan} días!</h4>` : '')}
                
                <img src="../../../img/map.png" alt="Ubicacion del lugar">
                ${date.proposedUserId != userMe.userId && date.state == 0 ?
                    `<div class="dateDetail__button">
                        <button id=${date.dateId} value="1" class="acceptDate">Aceptar</button>
                        <button id=${date.dateId} value="-1" class="cancelDate">Cancelar</button>
                    </div>`
                    :
                    `<div class="dateDetail_status">
                        <h4>Estado: ${message}</h4>
                    </div>`
                }
            </div>
        </article>
        `
    }
    
export default DatesCard;
