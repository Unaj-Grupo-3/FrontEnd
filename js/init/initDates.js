import { DatesCard } from "../components/ViewDates.js";
import { GetMatch, GetMyDates } from "../services/fetchDatesServices.js";
import { GetMyUser } from "../services/fetchUserServices.js"


/******DESPUES LA GUARDAMOS EN OTRO ARCHIVO******/
const printCards = async (listDates, count, userMe) => {
    console.log(listDates);

    if(count > 0)
    {
        const sectionContainer = document.querySelector("#Container-Dates");

        for (let i = 0; i < listDates.length; i++) {
            sectionContainer.innerHTML += await DatesCard(userMe, listDates[i]);
        }
    }
    else {
        console.log('no tiene citas')
    }
}
/**********************************************/

const userMe = await GetMyUser();
console.log(userMe)

/**
 * Comportamiento:
 *      - Traer todos los Matchs que tiene la persona NO
 *      + traer las citas
 *      + Renderizar un match + locacion + mapa por tarjeta 
 *      + Capturar clicks en la tarjeta o en el boton de nueva cita
 * 
 * Para mejorar: Ver la posibilidad de generar dos botones : Nueva Cita / Ver Citas para cuando clickee en la imagen
 * de la persona, lo lleve al perfil de la misma*
 */

//datesMe: { Count = response.Count, Response = IList<DateResponse> response }

const datesMe = await GetMyDates();
printCards(datesMe.response, datesMe.count, userMe)
