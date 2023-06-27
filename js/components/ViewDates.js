import { GetDatesByMatchId } from "../services/fetchDatesServices.js";

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

const DatesCard = async (date) => {
    console.log(date)
    let anotherUser = await GetDatesByMatchId(1); //GetUserInfo

/*
    <img src=${data.userInfo.images} alt=${data.userInfo.name}>
    <h3>${data.userInfo.userId} ${data.userInfo.name} ${data.userInfo.lastName}</h3>
    <p>Created: ${data.createdAt}</p>
    <p>Updated: ${data.updatedAt}</p>
    <p>Match ID: ${data.matchId}</p>
*/
        return  `
        <article class="dateDetail">
            <div class="dateDetail__content">
    
                <div class="dateDetail_content_user">
                    <h4>Datos del Usuario</h4>
                    <p>User1: ${date.match.user1}</p>
                    <p>User2: ${date.match.user2}</p>
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
    
export {ProfileCard, DatesCard};

function prueba(idMatch)
{
    alert("Hola" + idMatch);

}

window.prueba=prueba;