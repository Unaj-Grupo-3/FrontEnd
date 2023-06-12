import { leerMensajes } from "../container/connectionHub.js";



export const ObtenerChats = (callback)  => {
    let dataResponse;
    fetch('https://localhost:7165/api/v1/Chat/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los chats');
            }
            return response.json();
        })
        .then(data => {
           callback(data);
        })
        .catch(error => {
            console.log(error.message);
        });

        return dataResponse;
}

export const CargarMensajes = async (chatId,Index) => {
    let newMessage = document.getElementById("divNewMessage")
    if (newMessage) { newMessage.remove(); }
    let divMensajes = document.getElementById("chat-messages");
    divMensajes.innerHTML = '';
    
    let messagesToRead = [];
    await fetch('https://localhost:7165/api/v1/Chat' + `?PageSize=10&PageIndex=${Index}&ChatId=${chatId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(async data => {             
            let nombreUser = document.getElementById("chat-header2");
            nombreUser.innerHTML=`
                    <img src="${data.userFriend.images || '../../img/user-default.png'}" class="chat-img" title="a" />
                    <h3 id="nombre-chat">${data.userFriend.userName} ${data.userFriend.lastName}</h3>
            `;             
            localStorage.removeItem("currentChat");
            localStorage.setItem("currentChat", JSON.stringify(data));
            for (let i = 0; i < data.messages.length; i++) {
                let div = document.createElement("div");
                if (data.userFriend.userId == data.messages[i].fromUserId) {
                    div.innerHTML = `
                    <div class="messages_simple_left">
                        <img class="chat-messages" src="${data.userFriend.images ? data.userFriend.images : '../../img/user-default.png'}"/>
                        <div class="div_messages">
                            <p>${data.messages[i].content}</p>                
                        </div>
                    </div>
                    `;
                    if(!data.messages[i].isRead){
                       messagesToRead.push(data.messages[i].id);
                    }
                }
                else {
                    div.innerHTML = `
                    <div class="messages_simple_right">                                               
                        <div class="div_messages"> 
                            <p>${data.messages[i].content}</p>       
                            <span id="message-id-${data.messages[i].id}" 
                            class="material-symbols-outlined message-check-read message-check-read--${data.messages[i].isRead? `isRead` : `noRead` }"> done_all </span>             
                        </div>
                        <img class="chat-messages" src="${data.userMe.images ? data.userMe.images : '../../img/user-default.png'}"/>
                    </div>
                    `;
                }
                divMensajes.appendChild(div);
                
            }
            scrollToBottom("chat-mensajes");

            // Mostrar el chat una vez que se hayan cargado los mensajes
            let currentChat = JSON.parse(localStorage.getItem("currentChat"));

            if(data.messages.length < 10 && currentChat.pageIndex > 1)
            {
                await cargarMensajes2(currentChat.chatId,currentChat.pageIndex - 1,true);
            }
            if(messagesToRead.length > 0){
                console.log("Envio lectura de mensajes");
                console.log(messagesToRead);
                await leerMensajes(currentChat.chatId, messagesToRead);

            }
        })
        .catch(error => console.error(error));
}

export async function cargarMensajes2(chatId,Index,flag) {
    let divMensajes = document.getElementById("chat-messages");
    let messagesToRead = [];
    fetch('https://localhost:7165/api/v1/Chat' + `?PageSize=10&PageIndex=${Index}&ChatId=${chatId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then(response => response.json())
        .then(async data => {       
            localStorage.setItem("currentChat", JSON.stringify(data));
            for (let i = data.messages.length-1; i >= 0; i--) {
                let div = document.createElement("div");
                if (data.userFriend.userId == data.messages[i].fromUserId) {
                    div.innerHTML = `
                    <div class="messages_simple_left">
                        <img class="chat-messages" src="${data.userFriend.images ? data.userFriend.images : '../../img/user-default.png'}"/>
                        <div class="div_messages">
                            <p>${data.messages[i].content}</p>                
                        </div>
                    </div>
                    `;
                    if(!data.messages[i].isRead){
                        messagesToRead.push(data.messages[i].id);
                    }
                }
                else {
                    div.innerHTML = `
                    <div class="messages_simple_right">                                               
                        <div class="div_messages">
                            <p>${data.messages[i].content}</p>
                            <span id="message-id-${data.messages[i].id}" class="material-symbols-outlined message-check-read message-check-read--${data.messages[i].isRead? `isRead` : `noRead` }"> done_all </span>                  
                        </div>
                        <img class="chat-messages" src="${data.userMe.images ? data.userMe.images : '../../img/user-default.png'}"/>
                    </div>
                    `;
                }
                divMensajes.prepend(div);
                if(flag){
                    scrollToBottom("chat-messages");
                }
            } 
            if(messagesToRead.length > 0){
                console.log("Envio lectura de mensajes");
                let currentChat = JSON.parse(localStorage.getItem("currentChat"));
                await leerMensajes(currentChat.chatId, messagesToRead);
            }      
            
        })
        .catch(error => console.error(error));
}

export function scrollToBottom() {
    let div = document.getElementById("chat-messages");
    div.scrollTop = div.scrollHeight - div.clientHeight;
}
