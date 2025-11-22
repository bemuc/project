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

// swipper 1

let swiper1 = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// swipper 2

let swiper2 = new Swiper('.myswiper2', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.myswiper2-pagination',
    clickable: true
  }
})

// swipper 3`
let swiper3 = new Swiper('.mySwiper3', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper3-pagination',
    clickable: true
  }
})

// toggle aside on mobile/tablet
const aside = document.querySelector('aside')
const burgerBtn = document.getElementById('burgerBtn')
const closeAsideBtn = document.getElementById('closeBurgerBtn')

if (burgerBtn && aside) {
  burgerBtn.addEventListener('click', () => {
    aside.classList.add('aside--open')
  })
}

if (closeAsideBtn && aside) {
  closeAsideBtn.addEventListener('click', () => {
    aside.classList.remove('aside--open')
  })
}
