import { enviarMensaje } from "../container/connectionHub.js";
import { CargarMensajes, cargarMensajes2} from "../services/fetchChatServices.js";



export function renderChats(chats) {
    let nombreUser = document.getElementById("chat-header1");
    nombreUser.innerHTML=`
        <h3 id="nombre-chat">Chats</h3>
    `;    
    let listaChats = document.getElementById('chats-friend');
    listaChats.innerHTML = '';
    for (let i = 0; i < chats.listChat.length; i++) {
        let item = document.createElement('div');
        item.id = `chat-simple-${chats.listChat[i].chatId}`;
        item.classList.add('chat-simple');
        item.innerHTML = `  
            <img class="profile-img" src="${chats.listChat[i].userFriend.images ? chats.listChat[i].userFriend.images : '../../img/user-default.png'}" />
            <div class="last">
                <h5 class="Name">${chats.listChat[i].userFriend.userName} ${chats.listChat[i].userFriend.lastName}</h5>
                ${chats.listChat[i].latestMessage ? `
                <div id="lastMessage-chatId-${chats.listChat[i].chatId}" 
                    class="simple-container">
                    ${chats.listChat[i].latestMessage.fromUserId != chats.listChat[i].userFriend.userId ? 
                        `<span id="message-id-${chats.listChat[i].latestMessage.id}-simple" 
                        class="material-symbols-outlined message-check-read message-check-read--${chats.listChat[i].latestMessage.isRead? `isRead` : `noRead` }"> done_all </span>`: ""}
                    <p id="chat-${chats.listChat[i].chatId}-text" style="overflow-wrap: unset;text-overflow: ellipsis;">
                    ${chats.listChat[i].latestMessage.content.toString().substr(0, 50)}</p>
                </div>
                 ` : `<div id="lastMessage-chatId-${chats.listChat[i].chatId}" 
                 class="simple-container">
                 <p>Enviale un mensaje</p>
             </div>`} 
            </div>            
        `;
        let page;
        if ( chats.listChat[i].paginacion){ 
            page = chats.listChat[i].paginacion.totalPage;
        }
        else{
            page = 1;
        }
        let a = chats.listChat[i].chatId;
        item.addEventListener('click', async function () {
            let newMessage = document.getElementById(`divNewMessage-${a}`);
            if(newMessage){
                newMessage.remove();
            }
            localStorage.setItem("currentChat", JSON.stringify(chats.listChat[i]));
            await CargarMensajes(a,page);
        });
        listaChats.appendChild(item);
        if (chats.listChat[i].latestMessage) {
            // Es del otro
            let currentChat = JSON.parse(localStorage.getItem("currentChat"));
            if (chats.listChat[i].latestMessage.fromUserId != chats.userMe.userId && 
                !chats.listChat[i].latestMessage.isRead &&( !currentChat || currentChat.chatId != chats.listChat[i].chatId)) {
                let newMessage = document.createElement("div");
                newMessage.innerHTML = `
                    <div id="divNewMessage-${chats.listChat[i].chatId}" class="newMessage">
                        <h5>New</h5>
                    </div>`;
                let itemListChat = document.getElementById(`chat-simple-${chats.listChat[i].chatId}`)
                itemListChat.appendChild(newMessage);
            }else{
                // Es mio 
                let itemListChat = document.getElementById(`chat-simple-${chats.listChat[i].chatId}`);

            }
        }
    };
}

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


