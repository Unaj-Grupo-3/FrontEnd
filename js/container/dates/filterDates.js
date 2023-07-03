import { GetMyDates } from "../../services/fetchDatesServices.js"
import DatesCard from "../../components/dates/DatesCard.js";
import HeaderMyDates from "../../components/dates/HeaderMyDates.js";

export const filterDates = async (element) => {
    const sectionContainer = document.querySelector("#Container-Dates");

    let dates = await GetMyDates();
    const result = [];
    sectionContainer.innerHTML = HeaderMyDates();    
    if (dates.count > 0) {
        if (element.id != "") {
            result = dates.filter(date => date.state == element.id);
        }
        else {
            result = dates;
        }
        
        if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                sectionContainer.innerHTML += await DatesCard(userMe, result[i]);
            }  
            
            console.log(dates);
        }
    }
}

