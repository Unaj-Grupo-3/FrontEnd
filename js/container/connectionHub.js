import { renderChats, DrawMessage } from "../services/fetchChatServices.js";
import { currentChat } from "../services/fetchChatServices.js";

let isConnected = "";
let connection;

export async function addEventListenerHub() {
    const JwtToken = localStorage.getItem("token");

    connection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:7165/chathub', { accessTokenFactory: () => JwtToken })
        .build();

    await connection.start().then(() => {
        isConnected = true;
    }).catch((err) => {
        console.error(err.toString())
        window.onload();
    });

    if (isConnected) {
        connection.invoke("ConnectionOn");
    }

    connection.on("Logout", () => {
        alert("The tab will close");
        window.close();
    });

    connection.on("ReceiveMessage", async function (chatId, messageResponse) {
        if (currentChat && currentChat.chatId == chatId) {
            const lastMessage = document.getElementById(`lastMessage-chatId-${chatId}`);
            lastMessage.innerHTML = "";
            if (currentChat.userMe.userId == messageResponse.fromUserId) {
                lastMessage.innerHTML +=
                    `<span id="message-id-${messageResponse.id}-simple" class="material-symbols-outlined 
          message-check-read message-check-read--${messageResponse.isRead ? `isRead` : `noRead`}"> done_all </span> `
            }
            lastMessage.innerHTML += `
            <p id="chat-${chatId}-text" class="chat-text">${messageResponse.content.toString().substr(0, 50)}</p>
          `
            DrawMessage(chatId, messageResponse);
            return;
        }
        renderChats();
    });

    connection.on("MessagesAreRead", (chatId, messageIds) => {
        if (currentChat && currentChat.chatId == chatId) {
            for (const messageId of messageIds) {
                const message = document.getElementById(`message-id-${messageId}`);
                const checkRead = document.getElementById(`message-id-${messageId}-simple`);
                if (message) {
                    message.classList.remove("message-check-read--noRead");
                    message.classList.add("message-check-read--isRead");
                }
                if (checkRead) {
                    checkRead.classList.remove("message-check-read--noRead");
                    checkRead.classList.add("message-check-read--isRead");
                }
            }
        } else {
            for (const messageId of messageIds) {
                const checkRead = document.getElementById(`message-id-${messageId}-simple`);
                if (checkRead) {
                    checkRead.classList.remove("message-check-read--noRead");
                    checkRead.classList.add("message-check-read--isRead");
                }
            }
        }
    });
}

export function toSend() {
    const message = document.getElementById("txt-Message").value;
    connection.invoke("SendMessage", currentChat.chatId, message)
        .catch((err) => { console.error(err.toString()); });
    document.getElementById("txt-Message").value = "";
    document.getElementById("txt-Message").focus();
}

export async function readMessages(chatId, messageIds) {
    await connection.invoke("ReadMessages", chatId, messageIds).catch((err) => {
        console.error(err.toString());
    });
}
