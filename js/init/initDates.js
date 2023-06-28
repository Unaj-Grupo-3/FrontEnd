import DatesCard from "../components/dates/DatesCard.js";
import HeaderDates from "../components/dates/HeaderDates.js";
import { GetMyDates } from "../services/fetchDatesServices.js";
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
/*****************************************************/


const main = document.getElementById("main__dates");
const header = HeaderDates();
main.insertAdjacentHTML('afterbegin', header)

//mi usuario logueado
const userMe = await GetMyUser();
console.log(userMe)

//mis citas para pintar
const datesMe = await GetMyDates();
printCards(datesMe.response, datesMe.count, userMe)