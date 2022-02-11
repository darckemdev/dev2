window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}

let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for( var i=0; i < animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

