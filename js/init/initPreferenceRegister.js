import {addEventListenerPreference} from '../container/registerPreference.js';
import {GetInterest} from '../services/fetchPreferenceServices.js';
import {PrefComponent, InterestTag} from '../components/UserInfoComponent.js';

async function InterestOnClick(e){
    console.log(this.id);
    let intIdString = this.id;
    let idx = intIdString.lastIndexOf("_") + 1;
    let intId = intIdString.slice(idx, intIdString.length);
    let sendId = parseInt(intId);


    if(this.classList.contains('interest_item_sel'))
    {
        // this.classList.remove('interest_item_sel');
        // ModOwnPreference(sendId, false);
    }
    else
    {
        // this.classList.add('interest_item_sel');
        // let response = ModOwnPreference(sendId, true);
        // if(response.message = "La preferencia ingresada no existe"){
        //     CreateOwnPreference(sendId);
        // }
    }
}

async function RenderPref() {

    const prefContainer = document.querySelector('.pref_container');

    let categories = await GetInterest();

    categories.forEach((cat) =>
    {
        let ints4Cat = cat.interes;
        let contName = '#cat_' + cat.id;

        prefContainer.innerHTML += PrefComponent(cat.id, cat.description);
        
        let intContainer = document.querySelector(contName);

        ints4Cat.forEach((item) =>
        {
            intContainer.innerHTML += InterestTag(item.id, item.description);

            let intId = "#my_int_" + item.id;
        });
    })

    
    let tagContainers = document.querySelectorAll('.interest_item');
    tagContainers.forEach((item) =>{
        item.addEventListener('click', InterestOnClick);
    });

    //ShowMyInterest();
}


RenderPref();
addEventListenerPreference();