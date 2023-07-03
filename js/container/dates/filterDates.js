import { GetMyDates } from "../../services/fetchDatesServices.js"
import DatesCard from "../../components/dates/DatesCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";
import { GetMyUser } from "../../services/fetchUserServices.js";
import NoMatchsCard from "../../components/dates/NoMatchsCard.js";
import NoDatesCard from "../../components/dates/NoDatesCard.js";

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
            for (let i = 0; i < result.length; i++) {
                let userMe = await GetMyUser();
                sectionContainer.innerHTML += await DatesCard(userMe, result[i]);
            }  
            
            console.log(dates);
        }else{
            sectionContainer.innerHTML = NoDatesCard();
        }
    }
}

