const ProfileCard= (name, rootImage,id, idMatch) =>
`
<div class="Profile-Card">
    <div onclick="prueba(${idMatch})" class="div-click-profile">
        <img id="PhotoProfile" src="${rootImage? rootImage : '../../img/user-default.png'}" alt="alien">
        <div id="Shadow-Name-Profile"> 
            <div id="Name-Profile"> ${name} </div>  
        </div>
    </div>
    <button class="button-class-date" id="New-Date ${id}"> Nueva Cita </button>
</div>
`;

const DatesCard = (props) => {
    console.log(props)
    const data = {
        user: {
            img: 'imagen.png',
            name: 'Nombre' 
        },
        date: {
            description: 'nombre de la cita',
            date: 'fecha',
            status: 'aceptada',
            location: {
                lat: '-34',
                lng: '-53'
            }
        }
    }

        return  `
        <article class="dateDetail">
            <div class="dateDetail__content">
    
                <div class="dateDetail_content_user">
                    <img src=${data.user.img} alt=${data.user.name}>
                    <h3>${data.user.name}</h3>
                </div>
                
                <div class="dateDetail_content_detail">
                    <h3>Lugar: ${data.date.description}</h3>
                    <h2>Fecha: ${data.date.date}</h2>
                    <h2>Hora: 20:00 h</h2>
                </div>
    
                <div class="dateDetail_content_map">
                </div>
    
            </div>
    
            <div class="dateDetail__button">
                <button id="acceptDate">Aceptar</button>
                <button id="cancelDate">Cancelar</button>
            </div>
        </article>
        `
    }
    
export {ProfileCard, DatesCard};

function prueba(idMatch)
{
    alert("Hola" + idMatch);

}

window.prueba=prueba;