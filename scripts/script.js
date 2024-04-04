const showAllBtn = document.querySelectorAll('.brands-all')
const brandsList = document.querySelector('.brands-list')
  
showAllBtn.forEach(function(elem) {
  elem.addEventListener('click', function() {
    this.closest('.brands').querySelector('.brands-list').classList.toggle('brands-list--collapsed')
    this.closest('.brands').querySelector('.brands-list').classList.toggle('brands-list--uncollapsed')
    this.classList.toggle('brands-all--active')
    textContentToggle(this, 'Показать все', 'Скрыть')
  })
})

function textContentToggle(element, text1, text2) {
  if (element.textContent === text2) {
    element.textContent = text1;
  } else {
    element.textContent = text2;
  }
}

const slider = document.querySelectorAll('.brands-slider')

if (window.innerWidth < 768) {
  slider.forEach(function(elem) {
    // elem.classList.add('brands-slider')
    var swiper = new Swiper(".brands-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
} else {
  slider.forEach(function(elem) {
    elem.classList.remove('brands-slider')
  })
}

const sliderTablet = document.querySelectorAll('.tablet-slider')

if (window.innerWidth < 768) {
  sliderTablet.forEach(function(elem) {
    // elem.classList.add('tablet-slider')
    var swiper = new Swiper(".tablet-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
} else {
  sliderTablet.forEach(function(elem) {
    elem.classList.remove('tablet-slider')
  })
}

const overlay = document.querySelector('.overlay')
const formBlock = document.querySelector('.form-block--form')
const formBlockCloseBtn = document.querySelector('.form-block--form .form-close')

formBlockCloseBtn.addEventListener('click', function() {
  document.querySelector('html').classList.remove('no-scroll')
  document.querySelector('body').classList.remove('no-scroll')
  formBlock.classList.remove('form-block--visible')
  overlay.classList.remove('d-block')
})

const formBtn = document.querySelectorAll('.header__link--form')
formBtn.forEach(function(elem) {
  elem.addEventListener('click', function() {
    document.querySelector('html').classList.add('no-scroll')
    document.querySelector('body').classList.add('no-scroll')
    formBlock.classList.toggle('form-block--visible')
    overlay.classList.add('d-block')
  })
})

const callBtn = document.querySelectorAll('.header__link--call')
const callBlock = document.querySelector('.form-block--call')
const callBlockCloseBtn = document.querySelector('.form-block--call .form-close')

callBtn.forEach(function(elem) {
  elem.addEventListener('click', function() {
    document.querySelector('html').classList.add('no-scroll')
    document.querySelector('body').classList.add('no-scroll')
    callBlock.classList.toggle('form-block--visible')
    overlay.classList.add('d-block')
  })
})

callBlockCloseBtn.addEventListener('click', function() {
  document.querySelector('html').classList.remove('no-scroll')
  document.querySelector('body').classList.remove('no-scroll')
  callBlock.classList.remove('form-block--visible')
  overlay.classList.remove('d-block')
})

const menuBlock = document.querySelector('.aside')
const menuBtn = document.querySelector('.header__link--menu')
const menuCloseBtn = document.querySelector('.header__link--menu-close')

menuBtn.addEventListener('click', function() {
  document.querySelector('html').classList.add('no-scroll')
  document.querySelector('body').classList.add('no-scroll')
  menuBlock.classList.add('aside--visible')
  overlay.classList.add('d-block')
})
menuCloseBtn.addEventListener('click', function() {
  document.querySelector('html').classList.remove('no-scroll')
  document.querySelector('body').classList.remove('no-scroll')
  menuBlock.classList.remove('aside--visible')
  overlay.classList.remove('d-block')
})
