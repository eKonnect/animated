document.onscroll = function(){
    document.querySelector('.header').style.transform = `translateY(calc(-${scrollY}px / 5))`;
    document.querySelector('.header>p').style.opacity = `calc(100% - ${scrollY}% / 2)`;
    if(scrollY > 370) {
        document.querySelector('.navbar').style.backgroundColor = 'white';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'gray';
    }
}