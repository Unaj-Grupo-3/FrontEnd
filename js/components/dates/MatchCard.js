const MatchCard = async (match) => {
    return  `
        <article class="matchDetail">   
            <img src=${match.userInfo.images? match.userInfo.images : '../../../img/user-default.png'} alt=${match.userInfo.name}>
            <h4 class="dateDetail__contentUser">${match.userInfo.name} ${match.userInfo.lastName}</h4>
            <button id=${match.userInfo.userId} value="1" class="add-date" data-bs-toggle="modal" data-bs-target="#modalDate">Agregar cita</button>  
        </article>
        `
}
    
export default MatchCard;