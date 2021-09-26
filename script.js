document.getElementById('btn_rotateleft').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.classList.add('poldeux');
        shape.classList.remove('pol');
    });
    if (document.querySelector('.initialization-indicator').getAttribute('id') === 'turnright') {
        document.querySelector('.initialization-indicator').classList.remove('sec');
        setTimeout("foo()", 0);
        document.querySelector('.initialization-indicator').id = 'turnleft';
    }
}

function foo(){
    document.querySelector('.initialization-indicator').classList.add('sec');
}

document.getElementById('btn_rotateright').onclick = function(){
    document.querySelectorAll('.shape').forEach(function(shape) {
        shape.classList.add('pol');
        shape.classList.remove('poldeux');
    });
    if (document.querySelector('.initialization-indicator').getAttribute('id') === 'turnleft') {
        document.querySelector('.initialization-indicator').classList.remove('sec');
        setTimeout("foo()", 0);
        document.querySelector('.initialization-indicator').id = 'turnright';
    }
}