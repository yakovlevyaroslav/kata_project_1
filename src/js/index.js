import '../scss/style.scss'
import './sliders'
import './modals'

const showAllBtn = document.querySelectorAll('.brands-all')
  
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