const anime = require('animejs');
const { reverse } = require('lodash');


const pageTitle = document.getElementById('page-title');
pageTitle.innerHTML = pageTitle.innerHTML.split(' ')
                        .map(word =>`<span>${word}</span>`)
                        .reduce((str, word) => str + " " + word);


const introArrow = document.getElementById('arrow');

const navbar = document.querySelector("nav");

introArrow.addEventListener('click', () => {
    navbar.scrollIntoView();
})
                        
anime({
    targets: '.item',
    // translateX: 250,
    rotate: '1turn',
    backgroundColor: 'rgb(255, 255, 255)',
    duration: 800,
    delay: function (el, i, l) {
        return i * 100;
    },
});

anime({
    targets: 'section',
    translateX: 250,
    rotate: '',
    backgroundColor: '#1800cf',
    duration: 800,
    autoplay: false,
    direction: reverse,
    delay: function (el, i, l) {
        return i * 100;
    },
});


anime({
    targets: '#page-title span',
    // translateX: { value: -100, direction: reverse},
    duration: 1600,
    // direction: 'reverse',
    easing: 'easeInQuad',
    delay: anime.stagger(200),
    opacity: 100,
});




anime({
    targets: '#arrow',
    translateY: 25,
    duration: 1600,
    direction: 'alternate',
    loop: true,
});

