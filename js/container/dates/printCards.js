import DatesCard from "../../components/dates/DatesCard.js";
import MatchCard from "../../components/dates/MatchCard.js";
import AddDateCardUser from "../../components/dates/AddDateCardUser.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";
import NoMatchsCard from "../../components/dates/NoMatchsCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";
import { onListItemClick } from "./onListItemClick.js";

export const printCards = async (listDates, count, userMe, matches) => {
    console.log(listDates);
    let matchesList;
    const sectionContainer = document.querySelector("#Container-Dates");
    const sectionContainerMatches = document.querySelector("#Container-Matches");

    if (matches && matches.response && matches.response.matches && matches.response.matches.length > 0){   

        sectionContainerMatches.innerHTML = `<h4 class="dateDetail__contentTitle">Mis Matchs</h4><br>`     
        for (let i = 0; i < matches.response.matches.length; i++) {
            matchesList = matches.response.matches;
            sectionContainerMatches.innerHTML += await MatchCard(matches.response.matches[i]);
        };
        console.log(matchesList);
    }
    else {
        sectionContainerMatches.innerHTML += NoMatchsCard();
    }
    sectionContainer.innerHTML = HeaderMyDates();
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
    
    function onAddItemClick(elements){
        elements.forEach((element) => {
            element.addEventListener('click', () =>{
                agregarCita(element.id);
            })
        });
    }

    async function agregarCita(id){
        const newDateContainer = document.querySelector("#title-new-date");
        newDateContainer.innerHTML = await AddDateCardUser(matchesList.find(match => match.userInfo.userId == id));
    }

    onAddItemClick(document.querySelectorAll(".add-date"));
}

