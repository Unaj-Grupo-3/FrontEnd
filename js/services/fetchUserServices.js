
let urlBase = 'https://localhost:7020/api/v1';
let JwtToken = sessionStorage.getItem("token");
console.log(JwtToken);

export const GetMyUser = async () =>
{
    JwtToken = sessionStorage.getItem("token");

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

    if(response.status == 404){
        result = {
            status : 404
        }
    }
    
    return result;
}

export const ChangeUser = async (request) => 
{
    JwtToken = sessionStorage.getItem("token");
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
    JwtToken = sessionStorage.getItem("token");
    let result;
    let response = await fetch(`${urlBase}/Photo`, {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${JwtToken}`
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
        result = null;

        return result;
    }
    
}

export const CreateUser = async (request) => {

    JwtToken = sessionStorage.getItem("token");
    let result;
    let response = await fetch(urlBase+"/User", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}`
        },
        body: JSON.stringify(request) 
    })

    if(response.ok && response.status == 201){
        result = await response.json();
    }else{
        result = null;
    }

    return result;
}