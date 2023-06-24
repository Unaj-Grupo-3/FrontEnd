import { GetMySuggestions } from "../services/fetchSuggestionService.js";
import { CarouselIndicators } from "../components/carousel-indicators.js";
import { CarouselInner } from "../components/carousel-inner.js";
import { ButtonsLike } from "../components/button-like.js";
import { SuggestionData } from "../components/suggestion-data.js";

let suggestions = await GetMySuggestions();

let carouselIndicators = document.getElementById('carousel-indicators');
let carouselInner = document.getElementById('carousel-inner');
let containerLike = document.getElementById('container-like');
let containerData = document.getElementById('container-data');
let suggestionData = document.getElementById('suggestions-data');
let emptySuggestions = document.getElementById('empty-suggestions');

if(suggestions != undefined){
    //console.log(suggestions);
    renderSuggestion();
}
else{
    hiddenSuggestions();
}

function renderSuggestion(){
    let firstSuggestion = suggestions.suggestedUsers.pop();
    //console.log(firstSuggestion);

    if(firstSuggestion != undefined){
        let preferences = getPreferences(firstSuggestion.ourPreferences);
        let dateFormatted = getDate(firstSuggestion.birthday);
        let difference = age(dateFormatted);

        renderPhotos(firstSuggestion.images);
        renderData(firstSuggestion.name, firstSuggestion.lastName, difference, firstSuggestion.gender.description, firstSuggestion.location, preferences);
    }
    else{
        hiddenSuggestions();    
    }    
}

function renderData(name, lastName, age, gender, location, preferences){
    let fullName = name + ' ' + lastName;
    let edad = age + ' años';
    suggestionData.innerHTML = SuggestionData(fullName, edad, gender, location, preferences);
}

function renderPhotos(images){
    let indicators = '';
    let inner = '';
    if (images.length > 0){        
        for (let index = 0; index < images.length; index++) {
            indicators += CarouselIndicators(index);
            inner += CarouselInner(images[index].url, index);
        }
        inner += ButtonsLike(1);        
    } 
    else{
        inner = CarouselInner('../img/user-default.png', 0);
        indicators += CarouselIndicators(0);
        inner += ButtonsLike(1);        
    }
    carouselIndicators.innerHTML = indicators;
    carouselInner.innerHTML = inner;
    inner += ButtonsLike(1);  
    buttonsChoice(document.querySelectorAll(".choice-button"));
}

function getDate(dateString) {
     var dateParts = dateString.split('T');
     var dateStr = dateParts[0].split('-');
     return new Date(dateStr[0], dateStr[1]-1, dateStr[2]);
}

function age(birthdate) {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - 
               (today.getMonth() < birthdate.getMonth() || 
               (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
}

function getPreferences(ourPreferences){
    let interests = ''
    if(ourPreferences != undefined && ourPreferences.ownCategoryPreferences.length > 0){
        ourPreferences.ownCategoryPreferences.forEach(category => {
            category.interestPreferencesId.forEach(preference => {
                interests += preference.interest.description + ', '; 
            });
        });
    }
    return interests.substring(0, interests.length-2);
}

function hiddenSuggestions(){
    containerLike.style.display = "none";        
    containerData.style.display = "none";        
    emptySuggestions.style.display = "flex";  
}

function buttonsChoice(elements){
    elements.forEach((element) => {
        element.addEventListener('click', () =>{
            renderSuggestion();
        })
    });
}