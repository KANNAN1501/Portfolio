// menu icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};



// scroll section active link

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
    });


  // sticky navbar 
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);


// remove menu icon navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// dark light mode 

document.addEventListener('DOMContentLoaded', () => {
  const darkModeIcon = document.querySelector('#darkMode-icon');
  
  darkModeIcon.onclick = () => {
      darkModeIcon.classList.toggle('bx-sun');  // Assuming you use an icon class
      document.body.classList.toggle('dark-mode');
      
      // Optionally, save the user's preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
  };

  // Load the user's preference from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
  }
});


// let darkModeIcon = document.querySelector('#darkMode-icon');

// darkModeIcon.onclick = () => {
//   darkModeIcon.classList.toggle('bx-sun');
//   document.body.classList.toggle('dark-mode');
// };

// read more 

function toggleMoreContent() {
  const moreContent = document.querySelector('.more-content');
  const readMoreButton = document.querySelector('.read-more-button');

  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'inline';
      readMoreButton.innerHTML = 'Read Less';
  } else {
      moreContent.style.display = 'none';
      readMoreButton.innerHTML = 'Read More ';
  }
}


// scroll reveal 
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'})
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'})

