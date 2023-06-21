
let isConnected = false;
let connection;

const JwtToken = sessionStorage.getItem("token");

connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7165/chathub', { accessTokenFactory: () => JwtToken })
    .build();
connection.serverTimeoutInMilliseconds = 120000;
await connection.start().then(() => {
    isConnected = true;
}).catch((err) => {
    console.error(err.toString())
    window.onload();
});

if (isConnected) {
    connection.invoke("ConnectionOn");
}
connection.on("ReceiveMessage", async function (chatId, messageResponse) {
    const icono = document.getElementById('nav-icono');
    const newMessage = document.createElement('span');
    newMessage.id = 'miId';
    Object.assign(newMessage.style, {
        position: 'absolute', left: '39px', top: '10px', backgroundColor: '#2be241',
        display: 'flex', height: '8px', width: '8px', borderRadius: '4px',
    });
    icono.appendChild(newMessage);
});

async function searchNotification() {
    try {
        const response = await fetch("https://localhost:7165/api/v1/Chat/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${JwtToken}` }
        });
        if (response.ok) {
            const data = await response.json();
            for (const chat of data.listChat) {
                if (chat.latestMessage && chat.latestMessage.fromUserId != data.userMe.userId
                    && !chat.latestMessage.isRead) {
                    const icono = document.getElementById('nav-icono');
                    const newMessage = document.createElement('span');
                    newMessage.id = 'miId';
                    Object.assign(newMessage.style, {
                        position: 'absolute', left: '39px', top: '10px', backgroundColor: '#2be241',
                        display: 'flex', height: '8px', width: '8px', borderRadius: '4px',
                    });
                    icono.appendChild(newMessage);
                }
            }
        } else {
            throw new Error("Error obtaining chats");
        }
    } catch (error) {
        console.error(error);
    }
}


searchNotification();