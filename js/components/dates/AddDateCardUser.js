const AddDateCardUser = async (match) => {
    console.log(match)
    return  `
        <article class="addDate" id="${match.userInfo.userId}" name="addDate">   
            <img src=${match.userInfo.images} alt=${match.userInfo.name}>
            <h4 class="dateDetail__contentUser" id="nameDateUser">${match.userInfo.name} ${match.userInfo.lastName}</h4>
        </article>
        `
}
    
export default AddDateCardUser;