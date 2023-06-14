const section0 = document.getElementById('section0');
const section1 = document.getElementById('section1');
const section2_0 = document.getElementById('section2_0');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');

let chat = document.getElementById('chat');
let pageTitle = document.getElementById('pageTitle')

function openChat() {
    chat.style = 'display: block;';
}

function closeChat() {
    chat.style = 'display: none;';
}

function openMainPage() {
    pageTitle.innerText = 'Чебоксарский завод металлоизделий';
    section0.style = 'display: block;';
    section1.style = 'display: none;';
    section2_0.style = 'display: none;';
    section3.style = 'display: none;';
    section4.style = 'display: none;';
}

function openDeliverPage() {
    pageTitle.innerText = 'Доставка';
    section0.style = 'display: none;';
    section1.style = 'display: block;';
    section2_0.style = 'display: none;';
    section3.style = 'display: none;';
    section4.style = 'display: none;';
}

function openSection2_0() {
    pageTitle.innerText = 'Лазерная резка металла';
    section0.style = 'display: none;';
    section1.style = 'display: none;';
    section2_0.style = 'display: block;';
    section3.style = 'display: none;';
    section4.style = 'display: none;';
}

function openAboutPage() {
    pageTitle.innerText = 'О компании';
    section0.style = 'display: none;';
    section1.style = 'display: none;';
    section2_0.style = 'display: none;';
    section3.style = 'display: block;';
    section4.style = 'display: none;';
}

function openContactsPage() {
    pageTitle.innerText = 'Контакты';
    section0.style = 'display: none;';
    section1.style = 'display: none;';
    section2_0.style = 'display: none;';
    section3.style = 'display: none;';
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