import { createDate } from "./createDate.js";

export const onListItemClick = (elements) => {
    elements.forEach(element => {
        //filter header icons
        if (element.matches('#filter_accepted')) { 
            element.addEventListener('click', () => alert('Aceptadas')) 
        } else if (element.matches('#filter_rejected')) { 
            element.addEventListener('click', () => alert('Rechazadas')) 
        } else if (element.matches('#filter_pending')) { 
            element.addEventListener('click', () => alert('Pendientes')) 
        // } else if (element.matches('#filter_add')) { 
        //     element.addEventListener('click', () => createDate())
        } 
        //CARDS
        else if (element.classList.contains('acceptDate')) { 
            element.addEventListener('click', () => alert(`Aceptar Cita value:${element.value} dateId:${element.id}`)) 
        } else if (element.classList.contains('cancelDate')) { 
            element.addEventListener('click', () => alert(`Rechazar Cita value:${element.value} dateId:${element.id}`)) 
        } 
    });
}
