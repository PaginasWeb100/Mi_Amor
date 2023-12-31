const container=document.querySelector('.PrincipalCorazon');

for(var i=1;i<=100;i++){
    const hearts=document.createElement('div');
    hearts.classList.add('corazon');
    container.appendChild(hearts);
}

function animateHearts(){   
    anime({
        targets:'.corazon',
        translateX: function(){
            return anime.random(-700, 700);
        }, translateY: function(){
            return anime.random(-500, 500);
        }, rotate: 45, scale: function(){
            return anime.random(1, 5);
        }, easing: 'easeInOutBack', duration: 3000, delay: anime.stagger(10), complete: animateHearts,
    })
}

animateHearts()