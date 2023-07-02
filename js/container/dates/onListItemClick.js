import { createDate } from "./createDate.js";
import { filterDates } from "./filterDates.js";

export const onListItemClick = (elements) => {

    elements.forEach(element => {
        //filter header icons
        if (element.classList.contains('filter_accepted')) { 
            element.addEventListener('click', () => filterDates(element)) 
        } else if (element.classList.contains('filter_rejected')) { 
            element.addEventListener('click', () => filterDates(element)) 
        } else if (element.classList.contains('filter_pending')) { 
            element.addEventListener('click', () => filterDates(element)) 
        } else if (element.classList.contains('filter_all')) { 
            element.addEventListener('click', () => filterDates(element))
        } 
        //CARDS
        else if (element.classList.contains('acceptDate')) { 
            element.addEventListener('click', () => alert(`Aceptar Cita value:${element.value} dateId:${element.id}`)) 
        } else if (element.classList.contains('cancelDate')) { 
            element.addEventListener('click', () => alert(`Rechazar Cita value:${element.value} dateId:${element.id}`)) 
        } 
    });
}
