const anime = require('animejs');

anime({
    targets: '.item',
    // translateX: 250,
    rotate: '1turn',
    backgroundColor: 'rgb(255, 255, 255)',
    duration: 800,
    delay: function(el, i, l) {
        return i * 100;
      },
  });

