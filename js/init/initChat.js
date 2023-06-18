import { addEventListenerChat } from "../container/chatPage.js";
import { addEventListenerHub } from "../container/connectionHub.js"
import { renderChats } from "../services/fetchChatServices.js";

localStorage.removeItem("currentChat");
await addEventListenerHub();
renderChats();
addEventListenerChat();
