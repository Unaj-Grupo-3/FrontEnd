let urlBase = 'https://localhost:7017/api/v1/Auth/login';

export const login = (request, callback) => {

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
    .then(body => {
        callback(body);
        console.log(body);
        localStorage.setItem("token", body.result);
    })
}