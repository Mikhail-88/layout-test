'use strict';

window.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    slider();
});

const burgerMenu = () => {
    const menu = document.getElementById('menu');

    const onClickMenu = () => {
        menu.classList.toggle('change');
        document.getElementById('nav').classList.toggle('change');
        document.getElementById('menu-bg').classList.toggle('change-bg');
    };

    menu.addEventListener('click', onClickMenu);
};

const slider = () => {
    const slides = document.querySelectorAll('.slider__item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsWrap = document.querySelector('.slider__dots');
    const dots = document.querySelectorAll('.dot');
    let slideIndex = 1;
  
    const showSlides = n => {
        if (n > slides.length) {
            slideIndex = 1;
        }
    
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('dot-active')
    };

    showSlides(slideIndex);
  
    prev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    });
  
    next.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });
  
    dotsWrap.addEventListener('click', ({ target }) => {
        dots.forEach((dot, i) => {
            if (target.classList.contains('dot') && target === dot) {
                showSlides(slideIndex = i + 1);
            }
        });
    });
};