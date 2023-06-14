import { cargarMensajes2 } from "../services/fetchChatServices.js";
import { enviarMensaje } from "./connectionHub.js";

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