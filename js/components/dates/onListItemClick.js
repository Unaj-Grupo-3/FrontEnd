

const onListItemClick = (elements) => {
    elements.forEach(element => {
    //filter icons
        if (element.matches('#filter_accepted')) { //button
            element.addEventListener('click', () => alert('Aceptadas')) //html
        } else if (element.matches('#filter_rejected')) { //button
            element.addEventListener('click', () => alert('Rechazadas')) //html
        } else if (element.matches('#filter_pending')) { //button
            element.addEventListener('click', () => alert('Pendientes')) //html
        } else if (element.matches('#filter_add')) { //button
            element.addEventListener('click', () => alert('Agregar Cita')) //html
        } 
    });
}

export default onListItemClick;
