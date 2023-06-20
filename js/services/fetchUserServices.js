
let urlBase = 'https://localhost:7020/api/v1';
const JwtToken = sessionStorage.getItem("token");

export const GetMyUser = async () =>
{
    let result;
    let response = await fetch(`${urlBase}/User/true`, {
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

export const ChangePhotoOrd = async (request) => 
{
    let result;
    let response = await fetch(`${urlBase}/User`, {
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

export const UploadPhoto = async (data) =>
{
    let result;
    let response = await fetch(`${urlBase}/Photo`, {
        method: "POST",
        headers:{
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: data
    })

    result = await response.json();

    if(response.ok && response.status == 201){
        return result;
    }
    else{
        if(result.imagen == "No se pueden agregar mas fotos") {
            console.log("No se puede agregar mas fotos");
            return -1;
        }   
        result == null;

        return result;
    }
    
}