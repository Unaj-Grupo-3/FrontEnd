import {ProfileCard} from "../components/ViewDates.js";
import { GetMatch } from "../services/fetchDatesServices.js";

/**
 * Comportamiento:
 *      - Traer todos los Matchs que tiene la persona
 *      - Renderizar un match por tarjeta
 *      - Capturar clicks en la tarjeta o en el boton de nueva cita
 * 
 * Para mejorar: Ver la posibilidad de generar dos botones : Nueva Cita / Ver Citas para cuando clickee en la imagen
 * de la persona, lo lleve al perfil de la misma*
 */

// Traer todos los Matchs que tiene la persona


let matchs= await GetMatch();
if(matchs.response != null)
{
    const jsonMatch= matchs.response;
    let countMatchs = matchs.count;
    
    jsonMatch.matches.forEach(element => {
        if(element != null)
        {
            const matchId= element.matchId;
            const fullName = element.userInfo.name + " " + element.userInfo.lastName;
            const userPhoto= element.userInfo.images[0];
            const sectionContainer = document.querySelector(".Container-Dates");
            console.log(sectionContainer);
            console.log(ProfileCard(fullName , userPhoto, countMatchs, matchId));
            sectionContainer.innerHTML += ProfileCard(fullName , userPhoto, countMatchs, matchId);
            countMatchs -= 1;
        }
        
    });
}


