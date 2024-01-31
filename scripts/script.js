let showAllBtn = document.querySelector('.brands-all')
let brandsList = document.querySelector('.brands-list')
  
showAllBtn.addEventListener('click', function() {
  brandsList.classList.toggle('brands-list--collapsed')
  this.classList.toggle('brands-all--active')
  textContentToggle(this, 'Показать все', 'Скрыть')
})

function textContentToggle(element, text1, text2) {
  if (element.textContent === text2) {
    element.textContent = text1;
  } else {
    element.textContent = text2;
  }
}

let slider = document.querySelector('.brands-slider')

if (window.innerWidth < 768) {
  slider.classList.add('brands-slider')
  var swiper = new Swiper(".brands-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  slider.classList.remove('brands-slider')
}