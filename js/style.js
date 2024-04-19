const hamburger = document.querySelector('.menu_item__hamburger')
menu = document.querySelector('.hamburgerMenu')
closeElem = document.querySelector('.hamburgerMenu__close')

hamburger.addEventListener('click', () => {
    menu.classList.remove('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.add('active')
});

const buttonCalculator = document.querySelector('.repair_calculator__button')

buttonCalculator.addEventListener('click', () => {
    alert('спасибо, уже меньше, чем через час вы получите свой расчет !!!')
});

// window -------------------------------------------------------------------


closeElemWindow = document.querySelector('.services_window__close')
servicesWindow = document.querySelector('.services_window')

i = 0
function testScroll(ev) {
    if(window.pageYOffset>1700 , i == 1)
        servicesWindow.classList.remove('active')
    i += 1 
}

window.onscroll=testScroll

closeElemWindow.addEventListener('click', () => {
    servicesWindow.classList.add('active')
});

const buttonWindow = document.querySelector('.services_window__button')

buttonWindow.addEventListener('click', () => {
    alert('спасибо, уже меньше, чем через час вы получите свой расчет !!!')
});
 
// carousel --------------------------------------------

const handleImageChange = (offset) => {
    const activeSlide = document.querySelector('[data-active]')
    const slides = [...document.querySelectorAll('.case_carousel__slides-slide')]

    const currentIndex = slides.indexOf(activeSlide)

    let newIndex = currentIndex + offset

    if(newIndex < 0) newIndex = slides.length - 1
    if(newIndex >= slides.length) newIndex = 0

    slides[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

const onNext = () => handleImageChange(1)
const onPrev = () => handleImageChange(-1)

// ---------------------------------------------------------------

const buttonFamily = document.querySelector('.family_container__button')

buttonFamily.addEventListener('click', () => {
    alert('спасибо, уже меньше, чем через час вы получите свой расчет !!!')
});

