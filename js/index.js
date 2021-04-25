const anime = require('animejs');
const helpers = require('./helpers');
const github = require('./github');

loadPage()
function loadPage() {

    const userTheme = window.matchMedia('(prefers-color-scheme: dark').matches;
    document.body.className = userTheme ? "dark" : "light";

    const userMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(userMotion) document.body.classList.toggle("no-anim");

    // renderStars();
    renderPoly()
    let visited = document.cookie.split(';').some(c => c.includes("visited=true"));
    !visited && playLoadAnim();
    renderSection();

    github.getRepos();
    document.cookie = "visited=true;SameSite=Lax"

    const navbar = document.querySelector('nav');
    const menu = document.querySelector(".menu");
    const horizontalScroll = document.querySelector(".horizontal-scroll");

    menu.addEventListener('click', (e) => {
        const target = e.target;
        switch (target.id) {
            case "theme-switch":
                target.classList.toggle("rotate");
                helpers.toggleTheme();
                break;
            case "anim-switch":
                document.body.classList.toggle("no-anim");
                target.classList.toggle("fa-stop-circle")
                target.classList.toggle("fa-play-circle")
                break;
            default:
                break;
        }
    })

    const repoSection = document.querySelector(".repos");
    let direction;

    let scrollObserver = new IntersectionObserver((entries, observer) => {
        // check which divs are intersecting
        const intersecting = entries.filter(entry => {
            return entry.intersectionRatio > 0 && entry.intersectionRatio < 1
        });
        // get the intersecting div depending on the click direction
        const target = direction === 1
            ? intersecting[intersecting.length - 1].target
            : intersecting[0].target
        // calculate scroll offset to get to center of next div
        const scroll = target.offsetLeft + target.offsetWidth/2 - observer.root.offsetWidth/2;

        observer.root.scrollLeft = scroll;
        observer.disconnect();
    }, { root: repoSection })


    horizontalScroll.addEventListener('click', (e) => {
        const target = e.target;
        const scrollable = horizontalScroll.querySelector(".scrollable");

        // get child divs (repos)
        [...scrollable.children].forEach(child => { scrollObserver.observe(child) })

        direction = target.classList.contains('scroll-right') ? 1 :
                    target.classList.contains('scroll-right') ? -1 : 0
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
        renderSection();
    })
}

function renderSection() {
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

function renderPoly() {
    window.particlesJS.load('particles-js', './js/particles.json', function() {
        console.log('loaded');
      });
}

function playLoadAnim() {

    const header = document.querySelector('.intro');
    const title = helpers.spanWords(header.querySelector('h1'))
    const subtitle = helpers.spanWords(header.querySelector('p'))

    const navbar = document.querySelector('nav');
    const navWidth = navbar.offsetWidth;

    const tl = anime.timeline({
        autoplay: false,
        easing: 'easeOutCubic',
        duration: 600
    })
        .add({
            targets: title,
            translateX: [500, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
        })
        .add({
            targets: subtitle,
            opacity: [0, 1],
            delay: anime.stagger(200),
        })
        .add({
            targets: 'nav>button',
            translateX: [-navWidth - 50, 0],

            delay: anime.stagger(200),
        })

    tl.play();
}

