import { renderChats } from "../components/chats.js";
import { ObtenerChats, scrollToBottom } from "../services/fetchChatServices.js";

var connection;

export async  function addEventListenerHub(){

    let JwtToken = localStorage.getItem("token");

    connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7165/chathub', { accessTokenFactory: () => JwtToken })
    .build();

    await connection.start().then(function () {
        let isConnected = true;
    }).catch(function (err) {
        console.error(err.toString())
        window.onload();
    });

    connection.invoke("ConnectionOn");

    connection.on("Logout", function () {
        alert("La pestaña se cerrara");
    });

    connection.on("ReceiveMessage", async function (chatId, messageResponse) {
        let currentChat = JSON.parse( localStorage.getItem("currentChat") );
        ObtenerChats(renderChats);
        if (currentChat && currentChat.chatId == chatId) {
            let lastMessage = document.getElementById(`lastMessage-chatId-${chatId}`);

            // *La parte del simple.
            lastMessage.innerHTML = "";
            if(currentChat.userMe.userId == messageResponse.fromUserId){ 
                // !Significa que le tengo que poner visto
                lastMessage.innerHTML += 
                    `<span id="message-id-${messageResponse.id}-simple" 
                    class="material-symbols-outlined message-check-read message-check-read--${messageResponse.isRead? `isRead` : `noRead` }"> done_all </span>
                    `
            }
                lastMessage.innerHTML += `
                    <p id="chat-${chatId}-text" style="overflow-wrap: unset;text-overflow: ellipsis;">${messageResponse.content.toString().substr(0, 50)}</p>
                `
            
            // *a de la parte del simple.
            // *Empieza el chat
            if (messageResponse.fromUserId == currentChat.userFriend.userId) {
                let div = document.createElement("div");
                div.innerHTML = `
                <div class="messages_simple_left">
                    <img class="chat-messages" src="${currentChat.userFriend.images ? currentChat.userFriend.images : '../../img/user-default.png'}"/>
                    <div class="div_messages">
                        <p>${messageResponse.content}</p>                
                    </div>
                </div>
                `;
                document.getElementById("chat-messages").appendChild(div);
                scrollToBottom("chat-messages");
                await leerMensajes(chatId, [messageResponse.id]);
            }
            else {
                let div = document.createElement("div");
                div.innerHTML = `
                <div class="messages_simple_right">                          
                    <div class="div_messages">
                        <p>${messageResponse.content}</p> 
                        <span id="message-id-${messageResponse.id}"  
                        class="material-symbols-outlined message-check-read message-check-read--${messageResponse.isRead? `isRead` : `noRead` }"> done_all </span>                      
                    </div>
                    <img class="chat-messages" src="${currentChat.userMe.images ? currentChat.userMe.images : '../../img/user-default.png'}"/>
                </div>
            `;
                document.getElementById("chat-messages").appendChild(div);
                scrollToBottom();
            }
        }
        else {
            let lastMessage = document.getElementById(`lastMessage-chatId-${chatId}`);
            
            // let checkReadLastMessage = document.getElementById(`lastMessage-chatId-${chatId}`);

            // *La parte del simple.
            lastMessage.innerHTML = "";
            lastMessage.innerHTML += `
                    <p id="chat-${chatId}-text" style="overflow-wrap: unset;text-overflow: ellipsis;">${messageResponse.content.toString().substr(0, 50)}</p>
                `
                if(!messageResponse.isRead){
                    console.log(lastMessage.parentNode);
                    let newMessage = document.getElementById(`divNewMessage-${chatId}`);
                    if(!newMessage){
                        let newm = document.createElement('div');
                        newm.innerHTML = `
                            <div id="divNewMessage-${chatId}" class="newMessage">
                                <h5>New</h5>
                            </div>`;

                        lastMessage.parentNode.parentNode.appendChild(newm);
                    }
                }
            
        }
    });

    connection.on("MessagesAreRead", function(chatId, messageIds){

        let currentChat = JSON.parse( localStorage.getItem("currentChat") );

        if(currentChat && currentChat.chatId == chatId){
            for(let i = 0; i < messageIds.length; i++){
                let message = document.getElementById(`message-id-${messageIds[i]}`);
                let checkRead = document.getElementById(`message-id-${messageIds[i]}-simple`);
                if(message){
                    message.classList.remove("message-check-read--noRead");
                    message.classList.add("message-check-read--isRead");
                }
                if(checkRead){
                    checkRead.classList.remove("message-check-read--noRead");
                    checkRead.classList.add("message-check-read--isRead");
                }
            }
        }else{
            for(let i = 0; i < messageIds.length; i++){
                let checkRead = document.getElementById(`message-id-${messageIds[i]}-simple`);
                if(checkRead){
                    checkRead.classList.remove("message-check-read--noRead");
                    checkRead.classList.add("message-check-read--isRead");
                }
            }
        }

        ObtenerChats(renderChats);
    });
}

export function enviarMensaje() {
    var message = document.getElementById("txt-Message").value;
    let currentChat = JSON.parse( localStorage.getItem("currentChat") );
    connection.invoke("SendMessage", currentChat.chatId, message)
        .catch(function (err) {
            console.error(err.toString());
        });
    document.getElementById("txt-Message").value = '';
    document.getElementById("txt-Message").focus();
}

export async function leerMensajes(chatId, messageIds){
    await connection.invoke("ReadMessages", chatId, messageIds)
        .catch(function (err) {
            console.error(err.toString());
        });
}