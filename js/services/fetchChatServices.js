import { blockChat } from "../components/chats.js";
import { newMessage } from "../components/chats.js";
import { message_left } from "../components/chats.js";
import { message_right } from "../components/chats.js";
import { headerFriend } from "../components/chats.js";
import { readMessages } from "../container/connectionHub.js";

export let currentChat = "";
const JwtToken = sessionStorage.getItem("token");


export async function renderChats() {
    try {
        const response = await fetch("https://localhost:7165/api/v1/Chat/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${JwtToken}` }
        });
        if (response.ok) {
            const data = await response.json();
            const chatList = document.getElementById("chats-friend");
            chatList.innerHTML = "";
            for (const chat of data.listChat) {
                const chatItem = await blockChats(chat);
                chatList.appendChild(chatItem);
                if (chat.latestMessage && chat.latestMessage.fromUserId != data.userMe.userId &&
                    !chat.latestMessage.isRead && currentChat.chatId != chat.chatId) {
                    document.getElementById(`chat-simple-${chat.chatId}`).innerHTML += newMessage(chat.chatId);
                }
            }
        } else {
            throw new Error("Error obtaining chats");
        }
    } catch (error) {
        console.error(error);
    }
}

async function renderMessages(chatId, Index) {
    const newMessage = document.getElementById("divNewMessage");
    if (newMessage) {
        newMessage.remove();
    }
    try {
        const API_BASE_URL = "https://localhost:7165/api/v1/Chat?";
        const response = await fetch(`${API_BASE_URL}PageSize=10&PageIndex=${Index}&ChatId=${chatId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${JwtToken}` }
        });
        const data = await response.json();
        const divMessages = document.getElementById("chat-body");
        divMessages.innerHTML = "";
        const nameUser = document.getElementById("chat-header2");
        nameUser.innerHTML = headerFriend(data);
        localStorage.removeItem("chat");
        currentChat = data;
        const messagesToRead = await DrawMessage_page(data, true);
        if (data.messages.length < 10 && currentChat.pageIndex > 1) {
            await paginatedMessages(currentChat.chatId, currentChat.pageIndex - 1, true);
        }
        if (messagesToRead.length > 0) {
            await readMessages(currentChat.chatId, messagesToRead);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function paginatedMessages(chatId, pageIndex, flag) {
    try {
        const API_BASE_URL = "https://localhost:7165/api/v1/Chat?";
        const response = await fetch(`${API_BASE_URL}PageSize=10&PageIndex=${pageIndex}&ChatId=${chatId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${JwtToken}` },
        });
        const data = await response.json();
        currentChat = data;
        const messagesToRead = await DrawMessage_page(data, flag);
        if (messagesToRead.length > 0) {
            await readMessages(currentChat.chatId, messagesToRead);
        }
    } catch (error) {
        console.error(error);
    }
}

async function blockChats(element) {
    const chatId = element.chatId;
    const item = document.createElement("div");
    item.id = `chat-simple-${chatId}`;
    item.classList.add("chat-simple");
    item.innerHTML += blockChat(element);
    const page = element.paginacion ? element.paginacion.totalPage : 1;
    item.addEventListener("click", async () => {
        const linkColor = document.querySelectorAll(".chat-simple");
        linkColor.forEach((l) => l.classList.remove("active-chat"));
        item.classList.add("active-chat");

        const newMessage = document.getElementById(`divNewMessage-${chatId}`);
        if (newMessage) {
            newMessage.remove();
        }
        await renderMessages(chatId, page);
    });
    return item;
}

async function DrawMessage_page(data, flag) {
    const divMessages = document.getElementById("chat-body");
    const messagesToRead = [];
    for (let i = data.messages.length - 1; i >= 0; i--) {
        const div = document.createElement("div");
        if (data.userFriend.userId == data.messages[i].fromUserId) {
            div.innerHTML += message_left(data, data.messages[i]);
            if (!data.messages[i].isRead) {
                messagesToRead.push(data.messages[i].id);
            }
        } else {
            div.innerHTML += message_right(data, data.messages[i]);
        }
        divMessages.prepend(div);
    }
    if (flag) {
        scrollToBottom("chat-body");
    }
    else {
        document.getElementById("chat-body").scrollTop = 50;
    }
    return messagesToRead;
}

export async function DrawMessage(chatId, messageResponse) {
    const div = document.createElement("div");
    if (messageResponse.fromUserId == currentChat.userFriend.userId) {
        div.innerHTML += message_left(currentChat, messageResponse);
        document.getElementById("chat-body").appendChild(div);
        scrollToBottom("chat-body");
        await readMessages(chatId, [messageResponse.id]);
    } else {
        div.innerHTML += message_right(currentChat, messageResponse);
        document.getElementById("chat-body").appendChild(div);
        scrollToBottom("chat-body");
    }
    return;
}
export function scrollToBottom(id) {
    const div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}


