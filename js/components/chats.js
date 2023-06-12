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

export function addEventListenerChat(){
    document.getElementById("btnSend").addEventListener("click", () => {
        console.log("Hora de enviar");
        enviarMensaje();
    });

    document.getElementById("chat-messages").onscroll = function() {myFunction()};

    function myFunction(){
        let currentChat = JSON.parse( localStorage.getItem("currentChat") );
        if (document.getElementById("chat-messages").scrollTop == 0 && currentChat.pageIndex > 1) 
        { 
              cargarMensajes2(currentChat.chatId,currentChat.pageIndex - 1,false)
        }
    }

    document.getElementById("txt-Message").addEventListener("keypress", function (event) {
        console.log("Hora de enviar");
        if (event.key === "Enter")
            enviarMensaje();
    });
}