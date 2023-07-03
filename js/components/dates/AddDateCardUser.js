const AddDateCardUser = async (match) => {
    console.log(match)
    return  `
        <article class="addDate" id="${match.matchId}" name="addDate">   
            <img src=${match.userInfo.images? match.userInfo.images: '../../../img/user-default.png' } alt=${match.userInfo.name}>
            <h4 class="dateDetail__contentUser" id="nameDateUser">${match.userInfo.name} ${match.userInfo.lastName}</h4>
        </article>
        `
}
    
export default AddDateCardUser;