import '../scss/style.scss'

console.log('It works!')

let btn1 = document.getElementById('toggleBtn')
let hiddenItems = document.querySelectorAll('.hidden')
let showns = false

btn1.addEventListener('click', () => {
  hiddenItems.forEach((item) => {
    item.classList.toggle('hidden')
  })
  showns = !showns
  if (showns) {
    btnIcon.src = 'showLess.png'
    btn1.innerHTML = `<img id="btnIcon" src="img/showLess.png" alt="Hide"> Hide`
  } else {
    btnIcon.src = 'expand.svg'
    btn1.innerHTML = `<img id="btnIcon" src="img/expand.svg" alt="Show"> Show all `
  }
})
//

let btn2 = document.getElementById('toggleBtnTypes')
let HiddenItems = document.querySelectorAll('.types_hidden')
let Shown = false

btn2.addEventListener('click', () => {
  HiddenItems.forEach((item) => {
    item.classList.toggle('types_hidden')
  })
  Shown = !Shown
  if (Shown) {
    btn_Icon.src = 'showLess.png'
    btn2.innerHTML = `<img id="btn_Icon" src="img/showLess.png" alt="Hide"> Hide`
  } else {
    btn_Icon.src = 'expand.svg'
    btn2.innerHTML = `<img id="btn_Icon" src="img/expand.svg" alt="Show"> Show all`
  }
})

src = 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js'
let swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
