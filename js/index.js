//ANIMAÇÃO SCROLL

const target = document.querySelectorAll('[data-anime]')
const animacao = 'animacao'

function animeSite(){
  const windonTop = window.pageYOffset + ((window.innerHeight *3)/4)
  target.forEach((elemento)=>{
    if((windonTop)>elemento.offsetTop){
      elemento.classList.add(animacao)
    }else{
      elemento.classList.remove(animacao)
    }

    console.log(elemento.offsetTop)
  })
}

window.addEventListener('scroll', ()=>{
  animeSite()
})

// SLIDE IMAGENS

let swiper = new swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  },
  keyboard: true
});


// TRANSIÇÃO DE IMAGEM HISTÓRIA

let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#historia-slide img")
    max = images.length;
    

function nextImage() {


    images[currentImageIndex]
    .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()

    }, time)
}
window.addEventListener("load", start) 


// TRANSIÇÃO DE IMAGEM LITERATURA

let liteTime = 2000,
    literaturaImageIndex = 0,
    literaturaImages = document
                .querySelectorAll("#literatura-slide img")
    literatura = literaturaImages.length;
    

function literaturaImage() {


    literaturaImages[literaturaImageIndex]
    .classList.remove("selected-Literatura")

    literaturaImageIndex++

    if(literaturaImageIndex >= LiteraturaMax)
        literaturaImageIndex = 0

    literaturaImages[literaturaImageIndex]
        .classList.add("selected-Literatura")
}

function literatura() {
    setInterval(() => {
        literaturaImage()

    }, liteTime)
}
window.addEventListener("load", literatura) 


// TRANSIÇÃO DE IMAGEM CIENCIAS

let cienciasTime = 2000,
    cienciasImageIndex = 0,
    cienciasImages = document
                .querySelectorAll("#ciencias-slide img")
    ciencias = cienciasImages.length;
    

function cienciasImage() {


    cienciasImages[cienciasImageIndex]
    .classList.remove("selected-ciencias")

    cienciasImageIndex++

    if(cienciasImageIndex >= cienciasMax)
        cienciasImageIndex = 0

    cienciasImages[cienciasImageIndex]
        .classList.add("selected-ciencias")
}

function ciencias() {
    setInterval(() => {
        cienciasImage()

    }, cienciasTime)
}
window.addEventListener("load", ciencias)  


// TRANSIÇÃO DE IMAGEM FAUNA - FLORA

let faunaTime = 2000,
    faunaImageIndex = 0,
    faunaImages = document
                .querySelectorAll("#fauna-flora-slide img")
    faunaMax = faunaImages.length;
    

function faunaImage() {


    faunaImages[faunaImageIndex]
    .classList.remove("selected-fauna-flora")

    faunaImageIndex++

    if(faunaImageIndex >= faunaMax)
        faunaImageIndex = 0

    faunaImages[faunaImageIndex]
        .classList.add("selected-fauna-flora")
}

function faunaFlora() {
    setInterval(() => {
        faunaImage()

    }, faunaTime)
}
window.addEventListener("load", faunaFlora) 


// // TRANSIÇÃO DE IMAGEM VESTIMENTAS 

// let vestimentasTime = 2000,
//     vestimentasImageIndex = 0,
//     vestimentasImages = document
//                 .querySelectorAll("#vestimentos-slide img")
//     vestimentasMax = vestimentasImages.length;
    

// function vestimentasImage() {


//     vestimentasImages[vestimentasImageIndex]
//     .classList.remove("selected-vestimentos")

//     vestimentasImageIndex++

//     if(vestimentasImageIndex >= vestimentasMax)
//         vestimentasImageIndex = 0

//     vestimentasImages[vestimentasImageIndex]
//         .classList.add("selected-vestimentos")
// }

// function vestimentas() {
//     setInterval(() => {
//         vestimentasImage()

//     }, vestimentasTime)
// }
// window.addEventListener("load", vestimentas) 