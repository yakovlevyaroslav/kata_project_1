
// Modals
const htmlTagElement = document.querySelector('html')
const bodyTagElement = document.querySelector('body')

const overlay = document.querySelector('.overlay')
const formBlock = document.querySelector('.form-block--form')
const formBlockCloseBtn = formBlock.querySelector('.form-close')

formBlockCloseBtn.addEventListener('click', function() {
  htmlTagElement.classList.remove('no-scroll')
  bodyTagElement.classList.remove('no-scroll')
  formBlock.classList.remove('form-block--visible')
  overlay.classList.remove('d-block')
})

const formBtn = document.querySelectorAll('.header__link--form')
formBtn.forEach(function(elem) {
  elem.addEventListener('click', function() {
    htmlTagElement.classList.add('no-scroll')
    bodyTagElement.classList.add('no-scroll')
    formBlock.classList.toggle('form-block--visible')
    overlay.classList.add('d-block')
  })
})

const callBtn = document.querySelectorAll('.header__link--call')
const callBlock = document.querySelector('.form-block--call')
const callBlockCloseBtn = document.querySelector('.form-block--call .form-close')

callBtn.forEach(function(elem) {
  elem.addEventListener('click', function() {
    htmlTagElement.classList.add('no-scroll')
    bodyTagElement.classList.add('no-scroll')
    callBlock.classList.toggle('form-block--visible')
    overlay.classList.add('d-block')
  })
})

callBlockCloseBtn.addEventListener('click', function() {
  htmlTagElement.classList.remove('no-scroll')
  bodyTagElement.classList.remove('no-scroll')
  callBlock.classList.remove('form-block--visible')
  overlay.classList.remove('d-block')
})

const menuBlock = document.querySelector('.aside')
const menuBtn = document.querySelector('.header__link-btn--menu')
const menuCloseBtn = document.querySelector('.header__link-btn--menu-close')

menuBtn.addEventListener('click', function() {
  htmlTagElement.classList.add('no-scroll')
  bodyTagElement.classList.add('no-scroll')
  menuBlock.classList.add('aside--visible')
  overlay.classList.add('d-block')
})
menuCloseBtn.addEventListener('click', function() {
  htmlTagElement.classList.remove('no-scroll')
  bodyTagElement.classList.remove('no-scroll')
  menuBlock.classList.remove('aside--visible')
  overlay.classList.remove('d-block')
})

overlay.addEventListener('click', function() {
  this.classList.remove('d-block')
  formBlock.classList.remove('form-block--visible')
  callBlock.classList.remove('form-block--visible')
  menuBlock.classList.remove('aside--visible')
})