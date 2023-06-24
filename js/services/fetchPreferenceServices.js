const urlBase = 'https://localhost:7175/api/v1';
const JwtToken = sessionStorage.getItem("token");

export const GetMyOverall = async () => 
{
    let result;
    let response = await fetch(`${urlBase}/OverallPreference`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}`
        }
    })

    if(response.ok){
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}

export const GetCrushGender = async () =>
{
    let result;
    let response = await fetch(`${urlBase}/GenderPreference`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}`
        }
    })

    if(response.ok){
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}

export const GetInterest = async () => 
{
    try
    {
        let result;
        let response = await fetch(`${urlBase}/Interest`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            }
        })

        if(response.ok){
            result = await response.json();

            return result;
        }
        else{
            throw new Error("Error al hacer POST GenderPreference");
        }
    }
    catch(error)
    {
        console.log(error);
    }


}


export const PutMyOverall = async (request) => 
{
    let result;
    let response = await fetch(`${urlBase}/OverallPreference`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}`
        },
        body: JSON.stringify(request)
    })

    if(response.ok){
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}

export const PostGenderPref = async (request) =>
{
    try{
        let result;
        let response = await fetch(`${urlBase}/GenderPreference`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(request)
        })

        if(response.ok){
            result = await response.json();

            return result;
        }
        else{
            throw new Error("Error al hacer POST GenderPreference");
        }
    }
    catch(error){
        console.log(error);
    }
}

export const DeleteGenderPref = async (request) =>
{
    try{
        let result;
        let response = await fetch(`${urlBase}/GenderPreference`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(request)
        })

        if(response.ok){
            result = await response.json();
        }
        else{
            throw new Error("Error al hacer POST GenderPreference");
        }
    }
    catch(error){
        console.log(error);
    }
}