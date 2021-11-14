let img = document.querySelector('.img');
let h1 = document.querySelector('.h1');
let height = document.querySelector('.height');

document.onscroll = function(){
    img.style.transform = `translateY(calc(-${scrollY}px / 4)) translateX(-25%)`;
    // img.style.opacity = `calc(100% - ${scrollY}% / 10)`;
    h1.style.transform = `translateY(calc(-${scrollY}px / 3))`;
    // h1.style.opacity = `calc(100% - ${scrollY}% / 10)`;
}