
let urlBase = 'https://localhost:7020/api/v1';

export const GetMyUser = async () =>
{
    let result;
    let response = await fetch(`${urlBase}/User/me`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })

    if(response.ok){
        result = await response.json();
    }
    
    return result;
}