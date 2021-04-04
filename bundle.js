(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const anime = require('animejs');


const title = (targets) => anime({
    targets: targets,
    translateX: [500, 0],
    // duration: 800,
    // direction: 'reverse',
    // easing: 'easeOutQuad',
    // autoplay: false,
    delay: anime.stagger(200),
    // opacity: [0, 1],
    complete: function(anim) {
        console.log('completed');
      }
});

const navbar = anime({
    targets: 'nav button',
    translateY: [-200, 0],
    // duration: 800,
    // autoplay: false,
    // easing: 'easeOutCubic',
    // opacity: [0, 1],
    delay: anime.stagger(200),
    complete: function(anim) {
        console.log('completed');
      }
})




module.exports = {
    title,
    navbar,
}
},{}],2:[function(require,module,exports){
/*
Thanks to Dan's StackOverflow answer for this:
http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
*/

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    )
}


function spanWords(element) {
  element.innerHTML = element.innerHTML.split(' ')
      .map(word => `<span>${word}</span>`)
      .reduce((str, word) => str + " " + word);

  return element.children;

}



module.exports = {
  spanWords
}
},{}],3:[function(require,module,exports){
// const anime = require('animejs');
let anim = require('./animations');
const helpers = require('./helpers');

window.addEventListener('load', loadPage, false);

async function loadPage() {
    window.location.hash = "";

    const pageTitle = document.getElementById('page-title');
    const navbar = document.querySelector('nav');
    const tl = anime.timeline({
        autoplay: false,
        duration: 1000,
    })
    anim = require('./animations');
    tl
    .add(anim.title(helpers.spanWords(pageTitle)))
    .add(anim.navbar, '+=1000')

    // tl.play();
    // anim = 
    // anim.loadAnims()

    // .play();
    // anim.navbar.play();



    navbar.addEventListener('click', (e) => {
        const selectedBtn = e.target.classList[0];
        window.location.hash = selectedBtn;
        // toggleSection(document.querySelector(`section.${selectedBtn}`))


    })

    window.addEventListener('hashchange', (e) => {
        const activeElements = [...document.getElementsByClassName("active")];
        if (activeElements) {
            activeElements.forEach(element => {
                element.classList.toggle("active")
            })
        }

        const newElements = [...document.getElementsByClassName(window.location.hash.substring(1))];
        newElements.forEach(element => {
            element.classList.toggle("active")
        })

    })
}

function toggleSection(section) {
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}


function closeSection(section) {
    section.style.display = "none";
    // section.style.visibility = "hidden";
}

function openSection(section) {
    section.style.display = "block";
    // section.style.visibility = "visible";
}


},{"./animations":1,"./helpers":2}]},{},[3]);
