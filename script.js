// document.getElementById('btn_rotateleft').onclick = function(){
//     document.querySelectorAll('.shape').forEach(function(shape) {
//         shape.classList.add('poldeux');
//         shape.classList.remove('pol');
//     });
//     if (document.querySelector('.initialization-indicator').getAttribute('id') === 'turnright') {
//         document.querySelector('.initialization-indicator').classList.remove('sec');
//         setTimeout("foo()", 0);
//         document.querySelector('.initialization-indicator').id = 'turnleft';
//     }
// }

function foo(){
    document.querySelector('.initialization-indicator').classList.add('sec');
}

// document.getElementById('btn_rotateright').onclick = function(){
//     document.querySelectorAll('.shape').forEach(function(shape) {
//         shape.classList.add('pol');
//         shape.classList.remove('poldeux');
//     });
//     if (document.querySelector('.initialization-indicator').getAttribute('id') === 'turnleft') {
//         document.querySelector('.initialization-indicator').classList.remove('sec');
//         setTimeout("foo()", 0);
//         document.querySelector('.initialization-indicator').id = 'turnright';
//     }
// }

let optionsPanelOpen = false;
document.getElementById('btn_moreoptions').onclick = function(){
    if (optionsPanelOpen === false) {
        document.getElementById('options_panel').style = 'display: block;';
        optionsPanelOpen = true;
    } else {
        document.getElementById('options_panel').style = 'display: none;';
        optionsPanelOpen = false;
    }
}

document.getElementById('borderWeightSubmit').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.style.border = `${document.getElementById('borderWeightInput').value}px solid black`;
    });
    document.getElementById('options_panel').style.opacity = '1';
    document.getElementById('borderWeightPanel').style.opacity = '0';
    setTimeout("foodeux()", 150);
}

document.getElementById('speedSubmit').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.style.animationDuration = `${document.getElementById('speedInput').value}s`;
    });
    document.getElementById('options_panel').style.opacity = '1';
    document.getElementById('speedPanel').style.opacity = '0';
    setTimeout("footrois()", 150);
}

document.getElementById('animationSubmit').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.style.animationName = `${document.getElementById('animationInput').value.toLowerCase()}`;
    });
    document.getElementById('animationInput').value = document.getElementById('animationInput').value.toLowerCase();
    document.getElementById('options_panel').style.opacity = '1';
    document.getElementById('animationPanel').style.opacity = '0';
    setTimeout("fooquatre()", 150);
}

function foodeux(){
    document.getElementById('borderWeightPanel').style = 'display: none;';
}

function footrois(){
    document.getElementById('speedPanel').style = 'display: none;';
}

function fooquatre(){
    document.getElementById('animationPanel').style = 'display: none;';
}

document.getElementById('btnChangeWeight').onclick = function(){
    document.getElementById('options_panel').style.opacity = '0';
    document.getElementById('borderWeightPanel').style = 'display: block; opacity: 1; transition: .15s !important;';
}

document.getElementById('btnChangeSpeed').onclick = function(){
    document.getElementById('options_panel').style.opacity = '0';
    document.getElementById('speedPanel').style = 'display: block; opacity: 1; transition: .15s !important;';
}

document.getElementById('btnChangeAnimation').onclick = function(){
    document.getElementById('options_panel').style.opacity = '0';
    document.getElementById('animationPanel').style = 'display: block; opacity: 1; transition: .15s !important;';
}

document.getElementById('btn_account').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.style.opacity = '0';
    });
    document.body.style = 'transition: .3s; background-color: rgb(31, 31, 31);';
    setTimeout("gotoAccount()", 300);
}

function gotoAccount(){
    location.href = "./account/account.html";
}