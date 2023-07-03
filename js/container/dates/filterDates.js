import { GetMyDates } from "../../services/fetchDatesServices.js"
import DatesCard from "../../components/dates/DatesCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";
import { GetMyUser } from "../../services/fetchUserServices.js";
import NoMatchsCard from "../../components/dates/NoMatchsCard.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";
import { drawMap } from "./drawMap.js";

export const filterDates = async (element) => {
    const sectionContainer = document.querySelector("#Container-Dates");
    let dates = await GetMyDates();
    let arrayDates = dates.response;
    let result = [];
    sectionContainer.innerHTML = "";    
    if (dates.count > 0) {
        if (element.id != "") {
            result = arrayDates.filter(date => date.state == element.id);
        }
        else {
            result = arrayDates;
        }
        
        if (result.length > 0) {
            let userMe = await GetMyUser();
            let maps = [];
            for (let i = 0; i < result.length; i++) {
                sectionContainer.innerHTML += await DatesCard(userMe, result[i]);
                const mapCenter = await drawMap(result[i]);

                var mapOptions = {
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: true,
                    center: mapCenter,
                    fullscreenControl: false 
                }
    
                const map = {
                    id: result[i].dateId,
                    description: result[i].description,
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
            
        }else{
            sectionContainer.innerHTML = NoDatesCard();
        }
    }
}

