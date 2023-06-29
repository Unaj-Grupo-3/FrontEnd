



export function addEventListenerPreference(){

    document.addEventListener("change", (e) =>{
        
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

}