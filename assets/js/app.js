let chat = document.getElementById('chat');
const section0 = document.getElementById('section0');
const section4 = document.getElementById('section4');

function openChat() {
    chat.style = 'display: block;';
}

function closeChat() {
    chat.style = 'display: none;';
}

function openMainPage() {
    section0.style = 'display: block;';
    section4.style = 'display: none;';
}

function openContactsPage() {
    section0.style = 'display: none;';
    section4.style = 'display: block;';
}


function newMessage() {
    const chatMain = document.getElementById('chat_main');
    const messageText = document.getElementById('newMessageText').value;
    const newMessageDiv = document.createElement('div');
    const newMessageP = document.createElement('p');
    newMessageP.innerText = messageText;
    newMessageDiv.appendChild(newMessageP);
    chatMain.appendChild(newMessageDiv);
    newMessageDiv.style = 'background-color: #272727; color: rgb(161, 161, 161); width: 190px; height: 70px; border-radius: 10px; display: flex; align-items: center; position: relative; top: 150px; left: 10px;';
    newMessageP.style = 'text-align: center; width: 100%; font-size: 14px;';
    document.getElementById("newMessageText").value = "";
}