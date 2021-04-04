window.addEventListener('load', loadPage, false);

function loadPage() {
    window.location.hash = "";

    renderStars();
    playLoadAnim();
    
    const navbar = document.querySelector('nav');

    // Update URL hash
    navbar.addEventListener('click', (e) => {
        const selectedBtn = e.target;
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
    pageTitle = spanWords(pageTitle)

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

