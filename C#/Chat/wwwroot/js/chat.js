"use strict";

const connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

const sendButtonElement = document.getElementById("sendButton");
const messageListElement = document.getElementById("messagesList");

const userInputElement = document.getElementById("userInput");
const messageInputElement = document.getElementById("messageInput");

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    const li = document.createElement("li");
    messageListElement.appendChild(li);
    li.textContent = `${user} says ${message}`;
});

connection.start().then(() => sendButtonElement.disabled = false).catch(err => console.error(err.toString()));

sendButtonElement.addEventListener("click", e => {
    const user = userInputElement.value;
    const message = messageInputElement.value;
    connection.invoke("SendMessage", user, message).catch((err) => console.error(err.toString()));

    e.preventDefault();
});
