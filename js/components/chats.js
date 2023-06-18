
export const blockChat = (element) => {
    return `
    <img class="profile-img" src="${element.userFriend.images
    ? element.userFriend.images : "../images/perfil_normal.jpg"}" />                                              
        <div class="last">
            <h5 class="Name">${element.userFriend.userName} ${element.userFriend.lastName}</h5>    
            ${element.latestMessage ? `                                           
            <div id="lastMessage-chatId-${element.chatId}" class="simple-container">                      
                ${element.latestMessage.fromUserId != element.userFriend.userId
                ? `<span id="message-id-${element.latestMessage.id}-simple" class="material-symbols-outlined                                                         
                message-check-read message-check-read--${element.latestMessage.isRead ? `isRead` : `noRead`
                }"> done_all </span>` : ""}                                              
                <p id="chat-${element.chatId}-text" class="chat-text">
                ${element.latestMessage.content.toString().substr(0, 50)}</p>                       
            </div>`                 
            : `<div id="lastMessage-chatId-${element.chatId}" class="simple-container">                   
                <p>Enviale un mensaje</p>
            </div>`}      
        </div>`
}

export const newMessage = (chatId) => {
    return `
    <div id="divNewMessage-${chatId}" class="newMessage">
        <h5>New</h5>
    </div>     
    `
}

export const message_left = (currentChat, messageResponse) => {
    return `
    <div class="messages_simple_left">
        <img class="chat-messages" src="${currentChat.userFriend.images ? currentChat.userFriend.images        
            : "../images/perfil_normal.jpg" }"/>      
        <div class="div_messages">
            <p>${messageResponse.content}</p>                
        </div>
    </div>
    `;
}

export const message_right = (currentChat, messageResponse) => {
    return `
    <div class="messages_simple_right">                          
        <div class="div_messages">
            <p>${messageResponse.content}</p> 
            <span id="message-id-${messageResponse.id }" class="material-symbols-outlined        
            message-check-read message-check-read--${messageResponse.isRead ? `isRead` : `noRead`
            }"> done_all </span>                      
        </div>
        <img class="chat-messages" src="${currentChat.userMe.images ? currentChat.userMe.images           
            : "../images/perfil_normal.jpg"}"/>    
    </div>
`;
}

export const headerFriend = (data) => {
    return `
        <img src="${data.userFriend.images || "../images/perfil_normal.jpg"}" class="chat-img" title="a" />
        <h3 id="nombre-chat">${data.userFriend.userName} ${data.userFriend.lastName}</h3>   
    `;
}


