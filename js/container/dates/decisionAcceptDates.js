import {ChangeDate} from "../../services/fetchDatesServices.js"

export const decisionDate = async (dateId, status) =>
{
    let request = {
        "dateId": dateId,
        "state": status
      };
    await ChangeDate(request);
    location.reload(); // Agregado para renderizar la pagina nuevamente.
};