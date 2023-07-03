import DatesCard from "../../components/dates/DatesCard.js";
import MatchCard from "../../components/dates/MatchCard.js";
import AddDateCardUser from "../../components/dates/AddDateCardUser.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";
import NoMatchsCard from "../../components/dates/NoMatchsCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";
import { onListItemClick } from "./onListItemClick.js";
import { drawMap } from "./drawMap.js";

export const printCards = async (listDates, count, userMe, matches) => {
    let matchesList;
    const sectionContainer = document.querySelector("#Container-Dates");
    const filtersContainer = document.querySelector("#Container-Filters");
    const sectionContainerMatches = document.querySelector("#Container-Matches");

    if (matches && matches.response && matches.response.matches && matches.response.matches.length > 0){   

        sectionContainerMatches.innerHTML = `<h4 class="dateDetail__contentTitle">Mis Matchs</h4>`     
        for (let i = 0; i < matches.response.matches.length; i++) {
            matchesList = matches.response.matches;
            sectionContainerMatches.innerHTML += await MatchCard(matches.response.matches[i]);
        };
    }
    else {
        sectionContainerMatches.innerHTML += NoMatchsCard();
    }
    filtersContainer.innerHTML = HeaderMyDates();    
    
    if(count > 0)
    {
        sectionContainer.innerHTML = "";
        let maps = [];
        for (let i = 0; i < listDates.length; i++) {
            sectionContainer.innerHTML += await DatesCard(userMe, listDates[i]);
            const mapCenter = await drawMap(listDates[i]);

            var mapOptions = {
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                center: mapCenter,
                fullscreenControl: false 
            }
  
            const map = {
                id: listDates[i].dateId,
                description: listDates[i].description,
                mapOptions: mapOptions,
                mapCenter: mapCenter
            }
            maps.push(map);
     
        } 

        maps.forEach(element => {
            let mapId = `map_${element.id}`
            let divElementMap = document.getElementById(mapId)
            const map = new google.maps.Map(divElementMap, element.mapOptions);

            const marker = new google.maps.Marker({
                    map,
                    position: element.mapCenter,
                    title:  element.description
            }); 
        });            
    }
    else {
        sectionContainer.innerHTML += NoDatesCard();
    }
    onListItemClick(document.querySelectorAll('.acceptDate'))
    onListItemClick(document.querySelectorAll('.cancelDate'))

    onListItemClick(document.querySelectorAll('.filter_all'))
    onListItemClick(document.querySelectorAll('.filter_accepted'))
    onListItemClick(document.querySelectorAll('.filter_rejected'))
    onListItemClick(document.querySelectorAll('.filter_pending'))

    
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

