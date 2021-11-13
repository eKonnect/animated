// Cryptage BS : Caractère d'échappements !

let password = "";
let username = "";
let anonymMailSecondary = false;

if (localStorage.getItem('Tom') === null){
    localStorage.setItem('Tom', 'm');
}

if (localStorage.getItem('Eloan') === null){
    localStorage.setItem('Eloan', '///////////////////////////eloand2021');
}

if (localStorage.getItem('Maxime') === null){
    localStorage.setItem('Maxime', '///////////////maximewh2021');
}

setTimeout("login()", 0);

function login(){
    if (localStorage.getItem('password') !== null){
        password = localStorage.getItem('password');
    } else {
        password = prompt("Indiquez le mot de passe de votre compte.");
    }

    if (password === localStorage.getItem('Tom')){
        established("Tom");
        register();
        username = "Tom";
    }
    else if (password === localStorage.getItem('Eloan')){
        established("Eloan");
        register();
        username = "Eloan";
    }
    else if (password === localStorage.getItem('Maxime')){
        established("Maxime");
        register();
        username = "Maxime";
    }
    else {
        alert("Mot de passe incorrect.");
        back();
    }
}

function back(){
    location.href = "../index.html";
}

document.getElementById('btnChangeAccount').onclick = function(){
    localStorage.removeItem('password');
    location.href = './account.html';
}

document.getElementById('btnChangePassword').onclick = function(){
    password = prompt("Indiquez un nouveau mot de passe pour " + username + ".");
    localStorage.setItem('Tom', password);
}

document.getElementById('btn_back').onclick = function(){
    back();
}

function register(){
    document.getElementById('superdiv').style.display = 'block';
    document.querySelector('.ui-standard').style.display = 'block';
    localStorage.setItem('password', password);
    // setTimeout("openUiSecondary()", 1000);
}

function established(username){
    localStorage.setItem('username', username);
}

function openUiSecondary(){
    document.querySelector('.ui-secondary').style.transform = 'translateX(0%)';
    document.querySelector('.ui-standard').style.width = '50%';
    document.getElementById('uiStandardMask').style.display = 'block';
    document.getElementById('uiStandardMask').style.opacity = '1';
}

function closeUiSecondary(){
    document.querySelector('.ui-secondary').style.transform = 'translateX(100%)';
    document.querySelector('.ui-standard').style.width = '100%';
    document.getElementById('uiStandardMask').style.opacity = '0';
    setTimeout("dnoneUiStandardMask()", 300);
}

function dnoneUiStandardMask(){
    document.getElementById('uiStandardMask').style.display = 'none';
}

document.getElementById('btnSubmitFeedback').onclick = function(){
    openUiSecondary();
}

document.getElementById('btnCloseMailSecondary').onclick = function(){
    closeUiSecondary();
}

document.getElementById('btnSubmitMailSecondary').onclick = function(){
    document.getElementById('inputUsernameMailSecondary').value = localStorage.getItem('username').toLowerCase() + "@example.com";
}