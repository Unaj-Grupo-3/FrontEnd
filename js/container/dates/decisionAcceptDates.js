import {ChangeDate} from "../../services/fetchDatesServices.js"

export const decisionDate = (dateId, status) =>
{
    let request = {
        "dateId": dateId,
        "state": status
      }
      ;
      console.log(request);
    ChangeDate(request);
    location.reload(); // Agregado para renderizar la pagina nuevamente.
};