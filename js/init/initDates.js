import HeaderDates from "../components/dates/HeaderDates.js";
import { onListItemClick } from "../container/dates/onListItemClick.js";
import { GetMyMatchs } from "../services/fetchMatchServices.js";
import { GetMyDates } from "../services/fetchDatesServices.js";
import { GetMyUser } from "../services/fetchUserServices.js"
import { printCards } from "../container/dates/printCards.js"; 
import { SearcherLocation } from "../components/dates/SearcherLocation.js";

const main = document.getElementById("main__dates");
const dateModal = document.getElementById("modalDateBody");
const location = SearcherLocation();

const header = HeaderDates();
dateModal.insertAdjacentHTML('afterbegin', location)
main.insertAdjacentHTML('afterbegin', header)

//mi usuario logueado
const userMe = await GetMyUser();

//mis citas para pintar
var datesMe = await GetMyDates();
const matchsMe = await GetMyMatchs();

printCards(datesMe.response, datesMe.count, userMe, matchsMe)


