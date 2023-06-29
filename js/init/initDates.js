import HeaderDates from "../components/dates/HeaderDates.js";
import { onListItemClick } from "../container/dates/onListItemClick.js";
import { GetMyDates } from "../services/fetchDatesServices.js";
import { GetMyUser } from "../services/fetchUserServices.js"
import { printCards } from "../container/dates/printCards.js"; 
import AsideCreateDate from "../components/dates/AsideCreateDate.js";

const main = document.getElementById("main__dates");
const header = HeaderDates();
main.insertAdjacentHTML('afterbegin', header)

//mi usuario logueado
const userMe = await GetMyUser();
console.log(userMe)

//mis citas para pintar
const datesMe = await GetMyDates();
printCards(datesMe.response, datesMe.count, userMe)

onListItemClick(document.querySelectorAll('#filter_accepted'))
onListItemClick(document.querySelectorAll('#filter_rejected'))
onListItemClick(document.querySelectorAll('#filter_pending'))
onListItemClick(document.querySelectorAll('#filter_add'))


