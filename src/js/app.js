import Swiper, { Navigation, Pagination, } from 'swiper';

const teanSwiper = new Swiper('.team__swiper', {

  direction: 'horizontal',
  modules: [Navigation, Pagination,],

  wrapperClass: 'team__wrapper',
  slideClass: 'team__slide',

  navigation: {
    nextEl: '.team__button-next',
    prevEl: '.team__button-prev',
    disabledClass: 'team__button-disabled'
  },

  pagination: {
    el: '.team__pagination',
    type: 'bullets',
    bulletClass: 'team__pagination-bullet',
    bulletActiveClass: 'team__pagination-bullet--active',
    clickable: true
  },

});

let header = document.querySelector('.header');

if (document.documentElement.scrollTop) {
  header.classList.add('header--fixed');
}

window.addEventListener('scroll', function () {
  if (scrollY > 0) {
    header.classList.add('header--fixed');
  }
  else {
    header.classList.remove('header--fixed');
  }
});


let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__nav');
let body = document.querySelector('body');

headerBurger.addEventListener('click', function () {

  headerBurger.classList.toggle('burger--active');
  headerMenu.classList.toggle('header__nav--active');
  body.classList.toggle('no-scrol');
});

document.addEventListener('click', function (e) {
  if (headerMenu.classList.contains('header__nav--active')
    && !e.target.closest('.header__list')
    && !e.target.closest('.header__burger')
  ) {
    headerMenu.classList.remove('header__nav--active');
    headerBurger.classList.remove('burger--active');
    body.classList.remove('no-scrol');
  }
});


let callbackIcon = document.querySelector('.header__callback-icon');
let callbackBurger = document.querySelector('.callback-header__burger');
let callbackHeader = document.querySelector('.callback-header')

callbackIcon.addEventListener('click', function () {
  callbackHeader.classList.add('callback-header--active')
  body.classList.add('no-scrol');
});

callbackBurger.addEventListener('click', function () {
  callbackHeader.classList.remove('callback-header--active')
  body.classList.remove('no-scrol');
});

callbackHeader.addEventListener('click', function (e) {
  if (callbackHeader.classList.contains('callback-header--active')
    && !e.target.closest('.header__callback-icon')
    && !e.target.closest('.callback-header__form')
    && !e.target.closest('.callback-header__burger')
  ) {
    callbackHeader.classList.remove('callback-header--active');
    body.classList.remove('no-scrol');
  }
})



//Дропдаун

// let headerDropdawn = document.querySelectorAll('.header__item--dropdown');

// function headerDropdawnF(event) {
//   let target = event.target.closest('.header__item--dropdown');
//   let dropdownHeader = target.querySelector('.dropdown-header');
//   let dropdownHeaderHeight = dropdownHeader.clientHeight;

//   if (target.classList.contains('header__item--active')) {
//     target.classList.remove('header__item--active');
//     target.style.paddingBottom = 0;
//   }

//   else {
//     target.classList.add('header__item--active');

//     target.style.paddingBottom = dropdownHeaderHeight + 'px';
//   }
// };

// function close(event) {
//   let target = event.target.closest('.');

//   if (!target) {
//     headerDropdawn.forEach(headerDropdawnItem => {
//       headerDropdawnItem.classList.remove('--active');
//       headerDropdawnItem.style.paddingBottom = 0;
//     });

//   }
// }

// document.addEventListener('click', close);

//Проверка на мобилу

// if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//   headerDropdawn.forEach(headerDropdawnItem => {
//     headerDropdawnItem.addEventListener('click', headerDropdawnF);
//   });
// }

// Обратный отсчет

// let deadline = '2023-01-20';

// function getTimeRemaining(endtime) {
//   let t = Date.parse(endtime) - Date.parse(new Date());
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   let clock = document.getElementById(id);
//   let daysSpan = clock.querySelector('.days');
//   let hoursSpan = clock.querySelector('.hours');
//   let minutesSpan = clock.querySelector('.minutes');
//   let secondsSpan = clock.querySelector('.seconds');
//   function updateClock() {
//     let t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = ('0' + t.days).slice(-2);
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock(); // запустите функцию один раз, чтобы избежать задержки
//   let timeinterval = setInterval(updateClock, 1000);
// }

// initializeClock('clockdiv', deadline);

// Табы

// let tabButton = document.querySelectorAll('.tab__nav-item ');

// function tabTab(event) {
//   let target = event.target.closest('.tab__nav-item');

//   let tabButton = document.querySelectorAll('.tab__nav-item');

//   let tabTableWrapper = document.querySelectorAll('.tab__table-wrapper');

//   tabButton.forEach(tabButton => {
//     tabButton.classList.remove('tab__nav-item--active')
//   });

//   target.classList.add('tab__nav-item--active');

//   for (let item of tabTableWrapper) {
//     let slideData = item.dataset.target;
//     let buttunData = target.dataset.target + '-tab'

//     item.classList.remove('tab__table-wrapper--visible')

//     if (slideData == buttunData) {
//       item.classList.add('tab__table-wrapper--visible');
//     }
//   }

// }

// tabButton.forEach(tabItem => {
//   tabItem.addEventListener('click', tabTab);
// });

// Анимации при скролле

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 2;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }