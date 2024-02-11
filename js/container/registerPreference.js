import { PostMyOverall, PostGenderPref, PostPreference } from "../services/fetchPreferenceServices.js";
import { DeleteSuggestion } from "../services/fetchSuggestionServices.js";

export function addEventListenerPreference(){

    const generoRadios = document.querySelectorAll('input[type="checkbox"]');
    sessionStorage.removeItem("gender");
    sessionStorage.setItem("gender", JSON.stringify([]));
    generoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                
                let genderArray =JSON.parse(sessionStorage.getItem('gender'));

                if(!genderArray.includes(radio.value) ){
                    genderArray.push(radio.value);
                    
                    sessionStorage.setItem('gender', JSON.stringify(genderArray));
                }
            }else{
                let genderArray =JSON.parse(sessionStorage.getItem('gender'));

                genderArray  = genderArray.filter(x => x != radio.value);

                sessionStorage.setItem('gender', JSON.stringify(genderArray));
            }
        });
    });

    document.addEventListener("input", (e) =>{
        
        let {target} = e;

        if(target.type === "range"){
            if(target.id == "in_min_age"){
                let min = parseInt(target.value);
                let max = parseInt(document.getElementById("in_max_age").value);

                if(min > max){
                    min = max - 1;
                    target.value = max-1;
                }

                document.getElementById("lbl_min_age").textContent = `${min} Años`
            }

            if(target.id == "in_max_age"){
                let max = parseInt(target.value);
                let min = parseInt(document.getElementById("in_min_age").value);

                if(min > max){
                    max = min + 1;	
                    target.value = min+1;
                 
                }

                document.getElementById("lbl_max_age").textContent = `${max} Años`
            }

            if(target.id == "in_distance"){
                document.getElementById("distance").textContent = `${document.getElementById("in_distance").value} km`
            }
        }
    });

    document.getElementById("formAuth").addEventListener("submit", async (e) => {
        e.preventDefault();

        document.getElementById("step-4").innerHTML = '<div class="spinner"></div>';
        let minAge = document.getElementById("in_min_age").value;
        let maxAge = document.getElementById("in_max_age").value;
        let distance = document.getElementById("in_distance").value == 0 ? 100 : document.getElementById("in_distance").value;

        let request = {
            sinceAge: minAge,
            untilAge: maxAge,
            distance: distance 
        }
        
        await PostMyOverall(request);
   
        let genderArray = JSON.parse( sessionStorage.getItem('gender') );

        async function GenderPref(genderId) {
            let genderBody = {
                genderId : parseInt(genderId)
            }
            await PostGenderPref(genderBody);
        }

        genderArray.forEach( gender =>  GenderPref(gender));
        
        let ownInsterests = (document.getElementById("my_interest").querySelectorAll(".interest_item_sel"));
        let interests = Array.from(ownInsterests).map(interest => {

            let idString = interest.id;
            let idx = idString.split("_")[2];
            let interestBody  =  {
                    interestId: parseInt(idx),
                    ownInterest: true,
                    like: false
            }

            return interestBody;
        });
            
        async function addInterest(interest){
            await PostPreference(interest);
        }



       interests.forEach(i => addInterest(i));
       await DeleteSuggestion(0);
    document.getElementById("step-4").innerHTML = '<h2>Paso 4</h2> <p>Gustos</p>';
       window.location = "../../views/Matches.html"

    });
}