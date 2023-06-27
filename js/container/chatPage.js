import { paginatedMessages } from "../services/fetchChatServices.js";
import { currentChat } from "../services/fetchChatServices.js";
import { toSend } from "../container/connectionHub.js";

export function addEventListenerChat() {
  document.getElementById("chat-body").onscroll = () => {
    if (event.target.scrollTop == 0 && currentChat.pageIndex > 1) {
      paginatedMessages(currentChat.chatId, currentChat.pageIndex - 1, false);
    };
  };

  document.getElementById("btnSend").addEventListener("click", () => {
    toSend();
  });

  document.getElementById("txt-Message").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      toSend();
      const messageInput = document.getElementById('txt-Message');
      if (messageInput.value.trim() === '') {
        messageInput.value = '';
        messageInput.placeholder = 'Escriba su mensaje';
        event.preventDefault();
      }
    }
  });
}