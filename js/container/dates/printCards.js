import DatesCard from "../../components/dates/DatesCard.js";
import MatchCard from "../../components/dates/MatchCard.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";
import { onListItemClick } from "./onListItemClick.js";

export const printCards = async (listDates, count, userMe, matches) => {
    console.log(listDates);
    const sectionContainer = document.querySelector("#Container-Dates");
    const sectionContainerMatches = document.querySelector("#Container-Matches");

    if (matches && matches.response && matches.response.matches.length > 0){   
        sectionContainerMatches.innerHTML = `<h4 class="dateDetail__contentTitle">Mis Matchs</h4><br>`     
        for (let i = 0; i < matches.response.matches.length; i++) {
            sectionContainerMatches.innerHTML += await MatchCard(matches.response.matches[i]);
        };
    }

    if(count > 0)
    {
        sectionContainer.innerHTML = HeaderMyDates();
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

