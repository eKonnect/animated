document.onscroll = function(){
    document.querySelector('.header>img').style.transform = `translateY(calc(-${scrollY}px / 6)) scale(calc(1 + ${scrollY} / 1000))`;
    document.querySelector('.header>p').style.transform = `translateY(calc(-${scrollY}px / 3))`;
    document.querySelector('.header>p').style.opacity = `calc(100% - ${scrollY}% / 2)`;
    document.querySelectorAll('.height>*').forEach(function(element){
        element.style.opacity = `calc(${scrollY}% / 2)`;
    });
    if(scrollY === 0){
        document.querySelector('.height').style.opacity = '0';
        // document.querySelector('.header').style.height = 'calc(100% - 250px)';
    } else {
        document.querySelector('.height').style.opacity = '1';
        // document.querySelector('.header').style.height = '400px';
    }
    if(scrollY > 1) {
        document.querySelector('.navbar>.title').style.color = 'black';
        document.querySelector('.navbar').style.backgroundColor = 'white';
        document.querySelector('.navbar').style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, .5)';
    } else {
        document.querySelector('.navbar>.title').style.color = 'white';
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, .6)';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }
}

let displayImgCreated = false;
let displayImgThis = null;

function displayImg(path){
    let img = document.createElement('DIV');
    img.innerHTML = `<img src="${path}">`;
    img.classList.add('display-img');
    document.body.appendChild(img);
    document.body.style.overflowY = 'hidden';
    displayImgThis = img;
    displayImgCreated = true;
}

document.body.onclick = function(){
    if(displayImgCreated === true){
        document.querySelector('.display-img').onclick = function(){
            document.body.removeChild(displayImgThis);
            document.body.style.overflowY = 'auto';
        }
    }
}