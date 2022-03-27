const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    setWrapperSize: true,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});

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
    { interval: 100 })
