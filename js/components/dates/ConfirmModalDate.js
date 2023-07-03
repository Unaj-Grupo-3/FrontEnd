export const ConfirmModalDate = async (userName, date, place) => {
    return  `
                <div class="container confirm-modal" id="confirm-modal">
                    <h6>¿Desea confirmar una cita con ${userName} para el día ${date} en ${place}?<h6>
                </div>
                <div class="flex-center div-confirm-modal">
                    <button id="confirmarCita" class="button-confirmar">Confirmar</button>
                </div>
            `
};