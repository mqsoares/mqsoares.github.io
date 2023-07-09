const reveal = ScrollReveal({
    origin: 'top',
    distance: '1rem',
    duration: 1800,
    reset: true
})
reveal.reveal(`.title, .about-image, .about-write `)
ScrollReveal().reveal('.about-write', { delay: 100 })

const toggle = document.querySelectorAll('.toggle');
const nav = document.querySelector('.header-container');

for (const element of toggle) {    
    element.addEventListener('click', function() {      
        nav.classList.toggle('active')
    })
}
