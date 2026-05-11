const torty = document.querySelectorAll('.torty');
const ciastka = document.querySelectorAll('.ciastka');
const kawy = document.querySelectorAll('.kawy');
function zmiana(x){
    if(x == 1){
        torty.forEach(tort => tort.style.display = 'block');
        ciastka.forEach(ciastko => ciastko.style.display = 'none');
        kawy.forEach(kawa => kawa.style.display = 'none');
    }
    else if(x == 2){
        torty.forEach(tort => tort.style.display = 'none');
        ciastka.forEach(ciastko => ciastko.style.display = 'block');
        kawy.forEach(kawa => kawa.style.display = 'none');
    }
    else if(x ==3){
        torty.forEach(tort => tort.style.display = 'none');
        ciastka.forEach(ciastko => ciastko.style.display = 'none');
        kawy.forEach(kawa => kawa.style.display = 'block');
    }
}
    const burger = document.querySelector('.burger');
    const navKontent = document.querySelector('.nav_kontent');

    burger.addEventListener('click', () => {
        navKontent.classList.toggle('active');
    });
