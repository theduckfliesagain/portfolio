const anime = require('animejs');

const progressList = [
    { message: "Accuracy of stats", value: 83},
    { message: "Computer nerd status", value: 86 },
    { message: "Portfolio completion", value: 99},
    { message: "Calculating answer to Life, the Universe and Everything...", value: 42 },
    { message: "Googling googol", value: 100, text: "1e100 results" },
    { message: "Dividing 0 by 0", value: 1000, text: "NaN" },
]

let i = 0;

function renderProgress() {
    i = (i === progressList.length - 1) ? 0 : i + 1;

    // replace when secction covers home
    setTimeout(() => {
        const old = document.getElementById('dynamic-progress');
        const parent = old.parentElement;

        const dynamicProgress = document.createElement('div');
        dynamicProgress.id = 'dynamic-progress';

        const msg = document.createElement('p');
        msg.textContent = progressList[i].message;

        const progressBar = document.createElement('div');
        dynamicProgress.id = 'dynamic-progress';
        progressBar.className = 'progress'
        progressBar.setAttribute('data-value', 0)

        dynamicProgress.appendChild(msg)

        const progressValue = document.createElement('span');
        progressValue.className = 'value'
        progressValue.style.width = '0%';

        progressBar.appendChild(progressValue);
        dynamicProgress.appendChild(progressBar)

        parent.replaceChild(dynamicProgress, old);

        setTimeout(() => {
            if (progressList[i].text) {
                progressBar.classList.add('text')
                progressBar.setAttribute('data-value', progressList[i].text)
            } else {
                let count = {val: 0};

                anime({
                    targets: count,
                    val: progressList[i].value,
                    round: 1,
                    easing: 'easeInOutCubic',
                    duration: 2000,
                    update: () => {
                        progressBar.setAttribute('data-value', `${count.val}%`)
                    }
                })
                // let val = 0;
                // const progressCounter = setInterval(() => {
                //     val += 1;
                //     if (val >= progressList[i].value) {
                //         clearInterval(progressCounter);
                //     }

                //     progressBar.setAttribute('data-value', `${val}%`)
                // }, 20);
            }
            progressValue.style.width = `${progressList[i].value}%`;
        }, 500);


    }, 100);


}

module.exports = {
    renderProgress
}