let urlBase = 'https://localhost:7199/api';
//const JwtToken = sessionStorage.getItem("token");
//const JwtToken = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiQXV0aElkIjoiMjc2MjFkMGQtYjRmMS00ZWY5LTQ2ZjgtMDhkYjU0YjcxNDUyIiwiZXhwIjoxNjk4MjY5MTA4fQ.0VcxAtNr-LJTb35deIACJ3meZjhydemStci7fRhJAwSPdgYA7pWUI_RYE-OLf0sPSNfzXf2IgGztnmwYuwn_pA";
const JwtToken = sessionStorage.getItem("token");

//AGREGAR CITA
export const GenerateDate = async (data) =>
{
    let result;
    console.log(data);
    let response = await fetch(`${urlBase}/Date`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}`
        },
        body: JSON.stringify(data)
    })

    result = await response.json();
    
    if(response.ok && response.status == 201){
        return result;
    }
    else{
        if(result.imagen == "No se pudo generar la cita solicitada.") {
            console.log("No se udo generar la cita");
            return -1;
        }
        result == null;

        return result;
    }    
}
//DATE PAGE
export const GetMyDates = async () =>
{
    let result;
    let response = await fetch(`${urlBase}/Date/me`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}` 
        }
    })

    if(response.ok){
        result = await response.json();
    }
    
    return result;
}

/**
 * 
 * 
 */
export const ChangeDate = async (request) => 
{
    let result;
    let response = await fetch(`${urlBase}/Date`, {
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
    
    return result;
}

/**
 * Trae todos los Matchs que posee el usuario logueado
 * En sus atributos se encuentran:
 *          - Datos del usuario logueado
 *          - Datos del usuario matcheado
 *          - Id's de las tablas UserMatch y Match
 */
export async function GetMatch() 
{
    
    let result;
    let response = await fetch(`${urlBase}/v1/Match/me`, 
        {
            method:"GET",
            headers: { "Authorization": `Bearer ${JwtToken}`}
        });
        
    result = await response.json();
    if(response.ok && response.status == 200)
    {
        return result;
    }
    else 
    {
        result = {ok: false, message: "No se obtuvo respuesta o la API se encuentra caida" };
        return result;
    }
}

export const GetDatesByMatchId = async (matchId) =>
{
    let result;
    let response = await fetch(`${urlBase}/Date/${matchId}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}` 
        }
    })

    if(response.ok){
        result = await response.json();
    }
    
    return result;
}
