import { GetMySuggestions, DeleteSuggestion } from "../services/fetchSuggestionServices.js";
import { UserMatch } from "../services/fetchMatchServices.js";
import { CarouselIndicators } from "../components/carousel-indicators.js";
import { CarouselInner } from "../components/carousel-inner.js";
import { ButtonsLike } from "../components/button-like.js";
import { SuggestionData } from "../components/suggestion-data.js";
import { RenderModalMatch } from "../components/modalMatch.js";
import { GetMyMatchs, UpdateMatch } from "../services/fetchMatchServices.js";

let userId;
let suggestions = await GetMySuggestions();

let matchsMe = await GetMyMatchs();

let matchsNew;
document.getElementById("spinner-container").classList.add('spinner-hidden');

let firstSuggestion;
let carouselIndicators = document.getElementById('carousel-indicators');
let carouselInner = document.getElementById('carousel-inner');
let containerLike = document.getElementById('container-like');
let containerData = document.getElementById('container-data');
let suggestionData = document.getElementById('suggestions-data');
let emptySuggestions = document.getElementById('empty-suggestions');

if(matchsMe && matchsMe.response && matchsMe.response.matches && matchsMe.response.matches.length > 0) {
    userId = matchsMe.response.userMe.userId;
    matchsNew = matchsMe.response.matches.filter(x => (x.view1 == false && x.user1 == userId) || (x.view2 == false && x.user2 == userId) );   //deberia filtrar los match nuevos no vistos
    matchsNew.forEach((x) => {
        console.log(x);
    }); 
}

$('#modalMatch').on('hidden.bs.modal', function () {
    updateMatchView();    
    location.reload()
});


function buttonModalMatch(){
    let element = document.getElementById('btn-match');
    element.addEventListener('click', () =>{
        renderMatch();
    })
}

function showModalMatch(){
    let buttonModalMatch = document.getElementById('btn-match');
    buttonModalMatch.click();
}

buttonModalMatch();


if (matchsNew != undefined && matchsNew.length > 0) {
    
    let firstSuggestionNew = matchsNew.pop();
    
    let imagesNew = [];
    imagesNew.push({id: 0, url: firstSuggestionNew.userInfo.images});
    console.log("FirstSuggestionNew");
    console.log(firstSuggestionNew);
    firstSuggestion = {name: firstSuggestionNew.userInfo.name, lastName: firstSuggestionNew.userInfo.lastName, images: imagesNew, userId: firstSuggestionNew.userInfo.userId, matchId: firstSuggestionNew.matchId, user1: firstSuggestionNew.user1, user2: firstSuggestionNew.user2};
    console.log("FirstSuggestion2");
    console.log(firstSuggestion);
    showModalMatch();
}else{
    
    if(suggestions && suggestions.suggestedUsers != undefined){    
        renderSuggestion();
    }
    else{
        
        hiddenSuggestions();
    }
}


function renderSuggestion(){    
    firstSuggestion = suggestions.suggestedUsers.pop();
    
    if(firstSuggestion != undefined){
        let preferences = getPreferences(firstSuggestion.ourPreferences);
        let dateFormatted = getDate(firstSuggestion.birthday);
        let difference = age(dateFormatted);

        renderPhotos(firstSuggestion.images, firstSuggestion.userId);
        renderData(firstSuggestion.name, firstSuggestion.lastName, difference, firstSuggestion.gender.description, firstSuggestion.location, preferences, firstSuggestion.description);
    }
    else{
        hiddenSuggestions();    
    }    
}

function renderData(name, lastName, age, gender, location, preferences, description){
    let fullName = name + ' ' + lastName;
    let edad = age + ' años';
    suggestionData.innerHTML = SuggestionData(fullName, edad, gender, location, preferences, description);
}

function renderPhotos(images, userId){
    let indicators = '';
    let inner = '';
    if (images.length > 0){        
        for (let index = 0; index < images.length; index++) {
            indicators += CarouselIndicators(index);
            inner += CarouselInner(images[index].url, index);
        }
        inner += ButtonsLike(userId);        
    } 
    else{
        inner = CarouselInner('../img/user-default.png', 0);
        indicators += CarouselIndicators(0);
        inner += ButtonsLike(userId);        
    }
    carouselIndicators.innerHTML = indicators;
    carouselInner.innerHTML = inner;
        
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
            likeDislike(element.classList[1], element.id);
        })
    });
}

async function likeDislike(action, userId){
    let likeAnimation = document.getElementById('like-img');
    let dislikeAnimation = document.getElementById('dislike-img');
    let likeOption = false;

    switch (action) {
        case 'btnLike':
            likeAnimation.classList.add("show-animation");
            likeOption = true;
            break;
        case 'btnDislike':
            dislikeAnimation.classList.add("show-animation");
            break;    
        default:
            break;
    }   
    
    let userLike = {
        user2: userId,
        like: likeOption
    }
    let response = await UserMatch(userLike);

    if (response.response){
        await DeleteSuggestion(userId);
        if(response.response.isMatch){
            showModalMatch();
        }
    }
    setTimeout(() => {
        renderSuggestion();                
    }, 2000);
}

function renderMatch() {

    let fullName = firstSuggestion.name + ' ' + firstSuggestion.lastName;
    let photoMatch;
    if (firstSuggestion.images.length > 0) {        
        photoMatch = firstSuggestion.images[0].url;
    } 
    else{
        photoMatch = '../img/user-default.png', 0;
    }

    let modalBody = document.getElementById("modalMatchBody");
    modalBody.innerHTML = RenderModalMatch(fullName, photoMatch);  

    let element = document.getElementById('btn-hablar');
    element.addEventListener('click', async () =>{
        await updateMatchView();
        setTimeout(() => {
            window.location = '../../views/Chat.html'
        }, 1000);
    });

    setTimeout(() => {
        var locModalImg = document.getElementById('img-animation-match');
        locModalImg.classList.remove("show-animation");
    }, 1000);
}

async function updateMatchView() {

    let request;
    if(userId == firstSuggestion.user1) {
        request = {
            user1: userId,
            user2: firstSuggestion.userId
        }
    }
    else if(userId == firstSuggestion.user2) {
        request = {
            user1: firstSuggestion.userId,
            user2: userId
        }
    }

    await UpdateMatch(request);
}
