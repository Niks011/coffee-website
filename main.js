/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu show --
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu hide -- 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            spaceBetween: 80,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
// const scrollActive = () => {
//     const scrollDown = window.scrollY
//     sections.forEach(current => {

//         const sectionHeight = current.offsetheight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id')
//             sectionsClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

//         if (scrollDown > sectionTop && sectionDown <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.popular__swiper`, {delay: 800})
sr.reveal(`.home__shape`, { origin: 'bottom' })
sr.reveal(`.home__coffee`, { delay: 1000, distance: '200px', duration: 1500 })
sr.reveal(`.home__splash`, { delay: 1600, scale: 0, duration: 1500 })
sr.reveal(`.home__bean-1, .home__bean-2`, { delay: 2200, scale: 0, duration: 1500, rotate: { z: 180 } })
sr.reveal(`.home__ice-1, .home__ice-2`, { delay: 2800, scale: 0, duration: 1500, rotate: { z: 180 } })
sr.reveal(`.home__leaf`, { delay: 2600, scale: 0, duration: 1500, rotate: { z: 90}})
sr.reveal(`.home__title`, {delay: 3500})
sr.reveal(`.home__data, .home__sticker`, {delay: 4000})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__images`, {origin: 'right'})
sr.reveal(`.about__coffee`, {delay: 1000})
sr.reveal(`.about__leaf-1, .about__leaf-2`, {delay: 1800, rotate: {z: 90}})
sr.reveal(`.products__card, .contact__info`, {interval: 100})
sr.reveal(`.contact__shape`, {delay: 600, scale: 0})
sr.reveal(`.contact__delivery`, {delay: 1300})

// document.addEventListener('DOMContentLoaded', function() {
//   // Register GSAP plugins
//   gsap.registerPlugin(ScrollTrigger, TextPlugin);

//   // Prevent flash of unstyled content
//   gsap.set("[gsap-animate]", { opacity: 0 });

//   // ----------------------------
//   // HEADER ANIMATIONS
//   // ----------------------------
//     gsap.from(".nav__logo", {
//   duration: 1,
//   y: -50, // Starts 50px above
//   opacity: 0,
//   ease: "power2.out"
// });

// gsap.from(".nav__list li", {duration: 1, y: -50, opacity: 0, stagger: 0.1, // Each li animates 0.1s after previous
//   delay: 0.5, // Starts after logo animation
// });

// gsap.from(".home__shape", { duration: 1, y: 100, opacity: 0, rotate: 5, // Slightly rotated
//   ease: "back.out(1.7)", delay: 0.8 });

// gsap.from(".home__splash", { duration: 1, y: 100, opacity: 0, rotate: 10, // Slightly rotated
//   ease: "power2.out", // Overshoot effect
//   delay: 1.3 });

// gsap.from([".home__bean-1", ".home__bean-2"], { duration: 1.5, y: 50, opacity: 0, scale: 0.5, // Starts small
//   stagger: 0.3, // Second bean animates after 0.2s
//   delay: 2.5, ease: "power2.out"
// });

// gsap.from(".home__ice-1, .home__ice-2", { duration: 1.5, y: 50, opacity: 0, scale: 0.5, ease: "power2.out", delay: 2.5 });

// gsap.from(".home__coffee", { duration: 2, y: -200, // Starts way below
//   opacity: 0, rotate: 15, // Slightly rotated
//   ease: "back.out(1.7)", // Overshoot effect
//   delay: 2
// });

// gsap.from(".home__leaf",{ duration: 1.5, opacity:0, scale: 0, rotate: 90, ease: "power2.out", delay: 2 })


// gsap.from(".home__title, .home__data, .home__sticker", { duration: 5, y: -100, // Starts 100px below
//   opacity: 0, ease: "elastic.out(0.5, 0.5)", // Bouncy effect
//   delay: 2.5
// });

// gsap.from(".popular__card", {
//   scrollTrigger: { trigger: ".popular__container",
//     start: "top 40%", // When top hits 70% viewport
//     toggleActions: "play none none none" // Only play once
//   },
//   duration: 2, y: 100, opacity: 0,
//   stagger: 0.2, // Cards animate one after another
//   ease: "back.out(2)", delay: 0.5// Overshoot effect
// });

// })