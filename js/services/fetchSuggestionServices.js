let urlBase = 'https://localhost:7056/api/Suggestion';
const JwtToken = sessionStorage.getItem("token");

export const GetMySuggestions = async () =>
{
    console.log(JwtToken)
    let result;
    try {
        let response = await fetch(`${urlBase}/me`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}` 
            }
        })
    
        if(response.ok){
            result = await response.json();
        }
    } catch (error) {
        
    }
    
    //console.log(result)
    return result;
}