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