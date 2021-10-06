setTimeout("login()", 1000);

function login(){
    let password = prompt("Indiquez votre pseudo.");
    if (password === "TWHCLRSTTSDF543246151348664648"){
        alert("Bienvenue !")
        document.querySelector('h1').textContent = "Tom";
        document.querySelector('h2').textContent = "Ami";
    }
    else {
        alert("Mot de passe incorrect.");
        back();
    }
}

function back(){
    location.href = "../index.html";
}