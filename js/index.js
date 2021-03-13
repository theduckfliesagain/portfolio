const anime = require('animejs');
const helpers = require('./helpers');



const pageTitle = document.getElementById('page-title');
pageTitle.innerHTML = pageTitle.innerHTML.split(' ')
                        .map(word =>`<span>${word}</span>`)
                        .reduce((str, word) => str + " " + word);


const introArrow = document.getElementById('arrow');
const navbar = document.querySelector("nav");


// Intersection Observer




window.addEventListener('load', pageLoad, false)
  

function pageLoad() {
    document.querySelectorAll('section').forEach(section => createObserver(section))

}


function createObserver(target){
    let observer;

    const options = {
        // root: document.querySelector('body'),
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

                            
    const sectionAnim = anime({
        targets: target,
        translateX: 250,
        autoplay: false,
        easing: 'easeInQuad',
        direction: 'reverse',
        opacity: 0,
        // rotate: '-10',
        // backgroundColor: 'rgb(255, 255, 255)',
        duration: 800,
    });

 

    observer = new IntersectionObserver(handler, options);
    observer.observe(target);

    function handler(entries, observer){
        entries.forEach(entry => {
            // console.log(entry);
            // console.log(`${entry.target.querySelector('h2').innerHTML} intersecting: ${entry.isIntersecting}`);
            
            if(entry.isIntersecting && !sectionAnim.completed)
                sectionAnim.play();
        })
}



}

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



function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }
