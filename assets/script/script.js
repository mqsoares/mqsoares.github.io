const reveal = ScrollReveal({
    origin: 'top',
    distance: '1rem',
    duration: 1300,
    reset: true
})
reveal.reveal(`.about-title, .about-image, .about-write, .footer-links-contacts`)

const toggle = document.querySelectorAll('.toggle');
const nav = document.querySelector('.header-container');

for (const element of toggle) {    
    element.addEventListener('click', function() {      
        nav.classList.toggle('active')
    })
}

console.info(`

  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  █---╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗--█
  █---║║║╠─║─║─║║║║║╠─--█
  █---╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝--█
  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

HUUM... C U R I O S O, hein!?

Mas que bom ter você por aqui, 
pode fuçar a vontade, só não 
esquece de me mandar um feedback. 

TMJ _(",)_

`)

