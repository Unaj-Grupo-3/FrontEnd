import { renderChats } from "../components/chats.js";
import { addEventListenerChat } from "../container/chatPage.js";
import { addEventListenerHub } from "../container/connectionHub.js"
import { ObtenerChats } from "../services/fetchChatServices.js";


document.addEventListener("DOMContentLoaded", async () => { 
    localStorage.removeItem("currentChat");
    await addEventListenerHub();
    ObtenerChats(renderChats);
    addEventListenerChat();
});