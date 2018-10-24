const itemTrack = document.querySelector('.items');
const slides = Array.from(itemTrack.children);
const slideWidth = slides[0].getBoundingClientRect().width;
let index = 0;

slides.forEach((slide, index) => {
  slide.style.left = index * slideWidth + `px`
})

function getIndex() {
  if (index >= 14) { index = -1; }
  index++;
  return index;
}

function loadInitialState() {
  slides[0].classList.add('is-selected');
  slides[1].classList.add('is-selected');
  let nextSlide = slides[0]
  itemTrack.style.left = '-' + nextSlide.style.left
}

loadInitialState();

function selectSlide() {
  slides.forEach(slide => slide.classList.remove('is-selected'));
  let id = getIndex();
  slides[id].classList.add('is-selected');
  slides[id+1].classList.add('is-selected');
  let nextSlide = slides[id]
  itemTrack.style.left = '-' + nextSlide.style.left
}

window.setInterval(selectSlide, 3000);