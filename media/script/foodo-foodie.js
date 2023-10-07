/********************************************Starting of Header***************************************************************/
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>
{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60)
  {
    document.querySelector('#scroll-up').classList.add('active');
  }
  else
  {
    document.querySelector('#scroll-up').classList.remove('active')
  }
}

document.querySelector('#search-icon').onclick = () =>
{
  document.querySelector('#search-form').classList.toggle('active');    
}

document.querySelector('#close').onclick = () =>
{
  document.querySelector('#search-form').classList.remove('active');
}

/**============================================Ending of Header============================================================**/


/********************************************Starting of Loader***************************************************************/

function loader()
{
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeout()
{
  setInterval(loader, 3000);
}

window.onload = fadeout();
/**============================================Ending of Loader============================================================**/




/********************************************Starting of Slider***************************************************************/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**============================================Ending of Slider============================================================**/

/********************************************Starting of Customer Review***************************************************************/
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:
  {
    0:
    {
      slidesPerView: 1,
    },
    520:
    {
      slidesPerView: 2,
    },
    950:
    {
      slidesPerView: 3,
    },
  },
});
/**============================================Ending of Customer Review============================================================**/

// auto typing text
var typed = new Typed(".auto-type" , {
  strings: ["Delicious Food","Tasty Food","Yummy Food"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

