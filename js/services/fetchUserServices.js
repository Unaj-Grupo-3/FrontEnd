
let urlBase = 'https://localhost:7020/api/v1';

export const GetMyUser = async () =>
{
    let result;
    let response = await fetch(`${urlBase}/User/true`, {
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

export const ChangePhotoOrd = async (request) => 
{
    let result;
    let response = await fetch(`${urlBase}/User`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(request)
    })

    if(response.ok){
        result = await response.json();
    }
    
    return result;
}