
let urlBase = 'https://localhost:7020/api/v1';

export const GetMyUser = (callback) =>
{
    fetch(`${urlBase}/User/me`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then((httpResponse) => {
        if(httpResponse.ok)
            return httpResponse.json();
    })
    .then(body =>{
        console.log(body);
        callback(body);
    })
}