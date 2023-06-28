const ProfileCard = (name, rootImage,id, idMatch) =>
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
    
export default ProfileCard;

function prueba(idMatch)
{
    alert("Hola" + idMatch);

}

window.prueba=prueba;