const reveal = ScrollReveal({
    origin: 'top',
    distance: '1rem',
    duration: 1300,
    reset: true
})
reveal.reveal(`.title, .about-image, .about-write, .footer-links-contacts`)

const toggle = document.querySelectorAll('.toggle');
const nav = document.querySelector('.header-container');

for (const element of toggle) {    
    element.addEventListener('click', function() {      
        nav.classList.toggle('active')
    })
}
