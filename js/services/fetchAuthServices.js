let urlBase = 'https://localhost:7017/api/v1/Auth';

export const login = async (request) => {

    let result;
    let response = await fetch(`${urlBase}/login`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
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


export const GetMail = async (request) => {

    let result;
    let response = await fetch(urlBase,{
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


export const PutPasswd = async (request) => {
    
    let result;
    let response = await fetch(urlBase,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(request)
    })

    if(response.ok && response.status == 200) {
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}

export const CreateAuth = async (request) => {

    let result;
    let response = await fetch(urlBase, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
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