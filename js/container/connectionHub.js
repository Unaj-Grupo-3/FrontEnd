import { renderChats, DrawMessage } from "../services/fetchChatServices.js";
import { currentChat } from "../services/fetchChatServices.js";
import { updateLastMessage } from "../services/fetchChatServices.js";

let isConnected = "";
let connection;

export async function addEventListenerHub() {
    const JwtToken = sessionStorage.getItem("token");

    connection = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:7165/chathub', { accessTokenFactory: () => JwtToken })
        .build();

    await connection.start().then(() => {
        isConnected = true;
    }).catch((err) => {
        console.error(err.toString())
        addEventListenerHub()
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
            DrawMessage(chatId, messageResponse);                 
            setTimeout(renderChats, 500);
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

    connection.onclose(async () => {
        // Wait for 5 seconds before attempting to reconnect
        await new Promise(res => setTimeout(res, 5000));
        await connection.start().then(() => {
            isConnected = true;
            console.log("Reconnected to SignalR hub");
        }).catch((err) => {
            console.error(err.toString());
            addEventListenerHub()
        });
    });

}

export function toSend() {
    const message = document.getElementById("txt-Message").value;
    connection.invoke("SendMessage", currentChat.chatId, message)
        .catch((err) => { console.error(err.toString()); });
    document.getElementById("txt-Message").value = "";
}

export async function readMessages(chatId, messageIds) {
    await connection.invoke("ReadMessages", chatId, messageIds).catch((err) => {
        console.error(err.toString());
    });
}


