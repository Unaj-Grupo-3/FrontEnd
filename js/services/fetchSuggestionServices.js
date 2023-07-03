let urlBase = 'https://localhost:7056/api/Suggestion';
let JwtToken = sessionStorage.getItem("token");

export const GetMySuggestions = async () =>
{
    let result;
    JwtToken = sessionStorage.getItem("token");
    try {
        let response = await fetch(`${urlBase}/me`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}` 
            }
        })
        result = await response.json();
        if(response.ok){
            return result;
        }
    } catch (error) {
        console.log(error);
    }
    
    //console.log(result)
    return result;
}

export const DeleteSuggestion = async (userId) =>
{
    let request = {
        UserId: userId
    }
    JwtToken = sessionStorage.getItem("token");
    try
    {       
        let result;
        let response = await fetch(`${urlBase}`, {
            method: "DELETE",
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
            throw new Error("Error al eliminar la sugerencia");
        }
    }
    catch(error)
    {
        console.log(error);
    }
}