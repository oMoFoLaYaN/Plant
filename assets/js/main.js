// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MOBILE MENU
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ADD BOX-SHADOW IN SCROLLING DOWN IN THE HEADER
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

// ADD ACCORDIONS EFFECT
const accordions = document.querySelectorAll('.questions__item');

accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.questions__header');

    accordionHeader.addEventListener('click', () => {
        const openAccordion = document.querySelector('.accordion-open');
        
        toggleAccordion(accordion);

        if (openAccordion && openAccordion !== accordion) {
            toggleAccordion(openAccordion);
        }
    });
});

const toggleAccordion = (accordion) => {
    const accordionContent = accordion.querySelector('.questions__content');

    if (accordion.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        accordion.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        accordion.classList.add('accordion-open');
    }

}

// SET MENU LINKS AS ACTIVE WHEN SCROLLING
const sections = document.querySelectorAll('section[id]');;

window.addEventListener('scroll', () => {
    const { scrollY } = window;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;

        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});

// SHOW SCROLL TO TOP BUTTON
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});

// DARK/LIGHT THEME 
const themeButton = document.getElementById('theme-button');

const selectedTheme = localStorage.getItem('@PLANTEX:theme');
const selectedIcon = localStorage.getItem('@PLANTEX:theme-icon');

const getCurrentTheme = () => {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

const getCurrentIcon = () => {
    return themeButton.classList.contains('ri-sun-line') ? 'ri-moon-line' : 'ri-sun-line';
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove']('ri-sun-line');
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('ri-sun-line');

    localStorage.setItem('@PLANTEX:theme', getCurrentTheme());
    localStorage.setItem('@PLANTEX:theme-icon', getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

scrollReveal.reveal('.home__data');
scrollReveal.reveal('.home__image', { delay: 500 });
scrollReveal.reveal('.home__social', { delay: 600 });
scrollReveal.reveal('.about__image, .contact__box', { origin: 'left' });
scrollReveal.reveal('.about__data, .contact__form', { origin: 'right' });
scrollReveal.reveal('.steps__card, .product__card, .questions__group, .footer', { interval: 100 });