import { PutMyOverall } from "../../services/fetchPreferenceServices.js";
import { DeleteSuggestion } from "../../services/fetchSuggestionServices.js";


/* Min & Max age, Distance */
export async function ChangeOverall() {

    let inputMinAge = document.querySelector('#in_min_age');
    let inputMaxAge = document.querySelector('#in_max_age');
    let inputDistance = document.querySelector('#in_distance');

    let request = {
        sinceAge: inputMinAge.value,
        untilAge: inputMaxAge.value,
        distance: inputDistance.value  
    }

    let response = await PutMyOverall(request);

    if (response.response){
        await DeleteSuggestion(0);
    }

}