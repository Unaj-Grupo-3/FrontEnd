import {addEventListenerPreference} from '../container/registerPreference.js';
import {GetInterest} from '../services/fetchPreferenceServices.js';
import {PrefComponent, InterestTag} from '../components/UserInfoComponent.js';
import { GetMyUser } from '../services/fetchUserServices.js';

let myUser = await GetMyUser();

if(myUser?.status == 401){
    sessionStorage.removeItem('token');
    window.location = '../../views/AuthRegister.html';
}

if(myUser?.status == 404){
    window.location = '../../views/performanceRegister.html';
}


async function InterestOnClick(e){

    let intIdString = this.id;
    let idx = intIdString.lastIndexOf("_") + 1;
    let intId = intIdString.slice(idx, intIdString.length);
    let sendId = parseInt(intId);

    if(this.classList.contains('interest_item_sel'))
    {
        this.classList.remove('interest_item_sel');
        
    }
    else
    {
        this.classList.add('interest_item_sel');
         
    }
}

async function RenderPref() {

    const prefContainers = document.querySelectorAll('.pref_container');
    let categories = await GetInterest();

    prefContainers.forEach((prefContainer, index) => {
        categories.forEach((cat) =>
        {
            let ints4Cat = cat.interes;
            let contName = '#cat_' + cat.id;
    
            prefContainer.innerHTML += PrefComponent(cat.id, cat.description);
            
            let intContainer = (document.querySelectorAll(contName))[index];
    
            ints4Cat.forEach((item) =>
            {
                intContainer.innerHTML += InterestTag(item.id, item.description);
    
                let intId = "#my_int_" + item.id;
            });
        })
    
    });
    
    let tagContainers = document.querySelectorAll('.interest_item');
    tagContainers.forEach((item) =>{
        item.addEventListener('click', InterestOnClick);
    });

    
}

RenderPref();

addEventListenerPreference();