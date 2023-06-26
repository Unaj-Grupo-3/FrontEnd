let urlBase = 'https://localhost:7020/api/v1';
const JwtToken = sessionStorage.getItem("token");

export async function profile(){
    try {   
        const response = await fetch(`${urlBase}/User/true`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JwtToken}` 
        }
        })
        if (response.ok) {
            const data = await response.json();
            const img = document.getElementById("header_img");
            const nombre = document.getElementById("header_name");
            img.src = data.images[0].url;
            nombre.textContent = `${data.name} ${data.lastName}`;
        } else {
            throw new Error("Error obtaining user");
        }
    } catch (error) {
        console.error(error);
    }
}