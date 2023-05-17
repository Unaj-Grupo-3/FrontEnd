let urlBase = 'https://localhost:7017/api/v1/Auth/login';

export const login = async (request) => {

    fetch(urlBase,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
    .then((httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    })
    .then(json => {
        localStorage.setItem("token", json.token);
        console.log(json);
        callback(json);  
    })
}