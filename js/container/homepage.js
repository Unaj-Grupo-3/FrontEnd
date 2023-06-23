import { GetMySuggestions } from "../services/fetchSuggestionService.js";

let suggestions = await GetMySuggestions();
// let buttonNext =  document.getElementById('btnNext');
let name = document.getElementById('name-match');
let date = document.getElementById('date-match');
let gender = document.getElementById('gender-match');
let location = document.getElementById('location-match');
let preference = document.getElementById('preference-match');
let photo = document.getElementById('photo');
let containerLike = document.getElementById('container-like');
let containerData = document.getElementById('container-data');
let emptySuggestions = document.getElementById('empty-suggestions');

if(suggestions != undefined){
    console.log(suggestions);
    RenderSuggestion();
}
else{
    hiddenSuggestions();
}

function RenderSuggestion(){
    let firstSuggestion = suggestions.suggestedUsers.pop();
    console.log(firstSuggestion);
    console.log(suggestions.suggestedUsers);   
    
    if(firstSuggestion != undefined){
        let preferences = getPreferences(firstSuggestion.ourPreferences);
        name.textContent = firstSuggestion.name + ' ' + firstSuggestion.lastName;
        let dateFormatted = getDate(firstSuggestion.birthday);
        let difference = age(dateFormatted);
        date.textContent = difference + ' años';
        gender.textContent = firstSuggestion.gender.description;
        location.textContent = firstSuggestion.location;
        preference.textContent = preferences;
        photo.src = firstSuggestion.images[0].url;
    }
    else{
        hiddenSuggestions();    
    }
    
}


function ButtonsChoice(elements){
    elements.forEach((element) => {
        element.addEventListener('click', () =>{
            RenderSuggestion();
        })
    });
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
                //console.log(preference.interest.description + ' (' + category.description + ')');
            });
        });
    }
    console.log(ourPreferences);
    return interests.substring(0, interests.length-2);
}

function hiddenSuggestions(){
    name.textContent = 'Lo sentimos, no se encontraron más resultados para tu búsqueda';
    photo.src = '';
    containerLike.style.display = "none";        
    containerData.style.display = "none";        
    emptySuggestions.style.display = "flex";  
}

ButtonsChoice(document.querySelectorAll(".choice-button"));