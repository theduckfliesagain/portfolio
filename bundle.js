(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function spanWords(element) {
  element.innerHTML = element.innerHTML.split(' ')
      .map(word => `<span>${word}</span>`)
      .reduce((str, word) => str + " " + word);

  return element.children;

}

function toggleTheme() {
  const currentTheme = document.body.className;
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.body.className = newTheme;
}


module.exports = {spanWords, toggleTheme}



},{}],2:[function(require,module,exports){
const helpers = require('./helpers');

window.addEventListener('load', loadPage, false);

function loadPage() {
    window.location.hash = "";
    const userTheme = window.matchMedia("(prefers-color-theme: dark)").matches;
    console.log(window.matchMedia);
    document.body.className = userTheme ? "dark" : "light";
    
    renderStars();
    playLoadAnim();
    
    const navbar = document.querySelector('nav');
    const menu = document.querySelector(".menu");

    menu.addEventListener('click', (e) => {
        const target = e.target;
        switch (target.id) {
            case "theme-switch":
                target.classList.toggle("rotate");
                helpers.toggleTheme();
                break;
            default:
                break;
        }
    })

    // Update URL hash
    navbar.addEventListener('click', (e) => {
        const selectedBtn = e.target instanceof HTMLButtonElement 
        ? e.target
        : e.target.parentElement;
        
        window.location.hash = selectedBtn.classList.contains("active") 
                             ? "" : selectedBtn.classList[0];
    })
    // Open/close sections based on has change
    window.addEventListener('hashchange', (e) => {
        const activeElements = [...document.getElementsByClassName("active")];
        if (activeElements) {
            activeElements.forEach(element => {
                element.classList.toggle("active");
            })
        }
        const newElements = [...document.getElementsByClassName(window.location.hash.substring(1))];
        newElements.forEach(element => {
            element.classList.toggle("active");
        })

    })
}

function renderStars() {
    const stars = document.querySelector(".stars");
    let star = document.createElement("div");
    star.classList.toggle("star");
    let n = 200;
    for (let i = 0; i < n; i++) {
        stars.appendChild(star.cloneNode(true));
    }

}

function playLoadAnim() {
    
    let pageTitle = document.getElementById('page-title');
    pageTitle = helpers.spanWords(pageTitle)

    const navbar = document.querySelector('nav');
    const navWidth = navbar.offsetWidth;

    const tl = anime.timeline({
        autoplay: false,
        easing: 'easeOutCubic',
        duration: 600
    })
    .add({
        targets: pageTitle,
        translateX: [500, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
    })
    .add({
        targets: 'nav>button',
        translateX: [-navWidth-10,0],

        delay: anime.stagger(200),
    })

    tl.play();
}


},{"./helpers":1}]},{},[2]);
