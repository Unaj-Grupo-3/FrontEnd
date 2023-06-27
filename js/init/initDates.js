import { DatesCard } from "../components/ViewDates.js";
import { GetMatch, GetMyDates } from "../services/fetchDatesServices.js";

/******DESPUES LA GUARDAMOS EN OTRO ARCHIVO******/
const printCards = async (listDates, count) => {
    console.log(listDates);

    if(count > 0)
    {
        const sectionContainer = document.querySelector("#Container-Dates");

        for (let i = 0; i < listDates.length; i++) {
            let date = listDates[i];
            sectionContainer.innerHTML += await DatesCard(date);
        }
    }
    else {
        console.log('no tiene citas')
    }
}
/**********************************************/

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
printCards(datesMe.response, datesMe.count)
