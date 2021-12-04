document.onscroll = function(){
    document.querySelector('.header>p').style.transform = `translateY(calc(-${scrollY}px / 5))`;
    document.querySelector('.header>p').style.opacity = `calc(100% - ${scrollY}% / 2)`;
    document.querySelectorAll('.height>*').forEach(function(element){
        element.style.opacity = `calc(${scrollY}% / 2)`;
    });
    if(scrollY === 0){
        document.querySelector('.height').style.opacity = '0';
        document.querySelector('.header').style.height = 'calc(100% - 250px)';
    } else {
        document.querySelector('.height').style.opacity = '1';
        document.querySelector('.header').style.height = '400px';
    }
    if(scrollY > 1) {
        document.querySelector('.navbar').style.backgroundColor = 'white';
        document.querySelector('.navbar').style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, .5)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'gray';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }
    document.querySelector('.navbar>.part-indicator').textContent = "";
    if (scrollY >= (document.getElementById('capital_individuel_part').getBoundingClientRect().top + 700)){
        document.querySelector('.navbar>.part-indicator').textContent = "Capital individuel";
    }
    if (scrollY >= (document.getElementById('plan_des_kmgg_part').getBoundingClientRect().top + document.getElementById('capital_individuel_part').offsetTop + 900)){
        document.querySelector('.navbar>.part-indicator').textContent = "Plan des kutĕlemeв";
    }
}