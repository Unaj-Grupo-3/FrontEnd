let urlBase = 'https://localhost:7199/api/v1';
const JwtToken = sessionStorage.getItem("token");

export const UserMatch = async (request) => {
    let result;
    let response = await fetch(`${urlBase}/UserMatch`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}` 
        },
        body: JSON.stringify(request)
    })

    if(response.ok && response.status == 200){
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}