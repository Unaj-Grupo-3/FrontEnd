let urlBase = 'https://localhost:7017/api/v1/Auth/login';

export const login = async (request) => {

    let result;
    let response = await fetch(urlBase,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
    
    console.log(response);

    if(response.ok && response.status == 200){
        result = await response.json();
    }
    else{
        result = null;
    }

    return result;
}


//localStorage.setItem("token", json.token);