const toggle = document.querySelectorAll('.toggle')
const nav = document.querySelector('.header-container')

for (const element of toggle) {    
    element.addEventListener('click', function() {      
        nav.classList.toggle('active')
    })
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
    })
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    setWrapperSize: true,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        775: {
          slidesPerView: 2,
          setWrapperSize: true
        }
    }
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
  
scrollReveal.reveal(`
    #home .content-main-image, #home .content-main-written,
    #about .about-title, #about .content-about,
    #skills .skills-title, #skills .skkils-paragraph, #skills .skkils-cards,
    #project .project-title, #project .project-gh,
    #contact .contact-title, #contact .contact-text, #contact .contact-links
    `, 
    { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop () {
    if (window.scrollY >= 560) {
    backToTopButton.classList.add('active')
    } else {
    backToTopButton.classList.remove('active')
    }
}

const sections = document.querySelectorAll('section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {        
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
    
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    
        if (checkpointStart && checkpointEnd) {
          document 
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
          document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}


window.addEventListener('scroll', function() {
    backToTop ()
    activateMenuAtCurrentSection()
})
