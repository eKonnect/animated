let password = "";
let username = "";

if (localStorage.getItem('Tom') === null){
    localStorage.setItem('Tom', '5415085754874');
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
    setTimeout("openUiSecondary()", 1000);
}

function established(username){
    localStorage.setItem('username', username);
}

function openUiSecondary(){
    document.querySelector('.ui-secondary').style.transform = 'translateX(0%)';
    document.querySelector('.ui-standard').style.width = '50%';
}