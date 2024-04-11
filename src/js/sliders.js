// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const sliderBrands = document.querySelectorAll('.brands-slider')

if (window.innerWidth < 768) {
  sliderBrands.forEach(function(elem) {
    let swiperSliderBrands = new Swiper(".brands-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
} else {
  sliderBrands.forEach(function(elem) {
    elem.classList.remove('brands-slider')
  })
}

const sliderTablet = document.querySelectorAll('.table-slider')
if (window.innerWidth < 768) {
  sliderTablet.forEach(function(elem) {
    let swiperSliderTablet = new Swiper(".table-slider", {
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
    elem.classList.remove('table-slider')
  })
}