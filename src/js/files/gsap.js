import { isMobile } from './functions.js';
import { flsModules } from './modules.js';
const screenWidth = window.innerWidth;
if (ScrollTrigger.isTouch !== 1)
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
        effects: true,
    });

if (screenWidth >= 1020) {
    gsap.fromTo(
        '.header__logo',
        {
            scale: 1,
            y: 0,
        },
        {
            scale: 0.5,
            y: '-40vh',
            scrollTrigger: {
                trigger: '.hero',
                start: 'start start',
                end: '700',
                scrub: true,
            },
        },
    );
} else {
    gsap.fromTo(
        '.header__logo',
        {
            scale: 1,
            x: 0,
            y: 0,
        },
        {
            scale: 0.5,
            y: '-41.2vh',
            x: '-25vw',
            scrollTrigger: {
                trigger: '.hero',
                start: 'start start',
                end: '700',
                scrub: true,
            },
        },
    );
}

gsap.fromTo(
    '.hero__content',
    {
        opacity: 1,
        y: 0,
    },
    {
        opacity: 0,
        // y: '-40vh',
        scrollTrigger: {
            trigger: '.hero__content',
            start: 'start start',
            end: '700',
            scrub: true,
        },
    },
);
gsap.fromTo(
    '.hero__content h4',
    {
        y: 0,
    },
    {
        // opacity: 0,
        y: '20vh',
        scrollTrigger: {
            trigger: '.hero__content',
            start: 'start start',
            end: '700',
            scrub: true,
        },
    },
);
