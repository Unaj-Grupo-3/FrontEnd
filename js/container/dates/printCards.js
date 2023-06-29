import DatesCard from "../../components/dates/DatesCard.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";
import { onListItemClick } from "./onListItemClick.js";

export const printCards = async (listDates, count, userMe) => {
    console.log(listDates);
    const sectionContainer = document.querySelector("#Container-Dates");

    if(count > 0)
    {

        for (let i = 0; i < listDates.length; i++) {
            sectionContainer.innerHTML += await DatesCard(userMe, listDates[i]);
        }
        
    }
    else {
        sectionContainer.innerHTML += NoDatesCard();
    }
    onListItemClick(document.querySelectorAll('.acceptDate'))
    onListItemClick(document.querySelectorAll('.cancelDate'))
}

