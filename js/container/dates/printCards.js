import DatesCard from "../../components/dates/DatesCard.js";
import { onListItemClick } from "./onListItemClick.js";

export const printCards = async (listDates, count, userMe) => {
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
    onListItemClick(document.querySelectorAll('.acceptDate'))
    onListItemClick(document.querySelectorAll('.cancelDate'))
}

