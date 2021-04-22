// const anime = require('animejs');


const title = (targets) => anime({
    targets: targets,
    translateX: [500, 0],
    // duration: 800,
    // direction: 'reverse',
    // easing: 'easeOutQuad',
    delay: anime.stagger(200),
    // opacity: [0, 1],
    complete: function (anim) {
        console.log('completed');
    }
});

const navbar = anime({
    targets: 'nav button',
    translateY: [-200, 0],
    // duration: 800,
    // easing: 'easeOutCubic',
    // opacity: [0, 1],
    delay: anime.stagger(200),
    complete: function (anim) {
        console.log('completed');
    }
})


const loadAnim = () => {
    tl = anime.timeline({
        easing: 'easeOutExpo',
        autoplay: false,
        duration: 1000
    })

    tl
    .add(title(spanWords(document.getElementById('page-title'))))
    .add(navbar)

    return tl;
}



// module.exports = {
//     title,
//     navbar,
// }