function spanWords(element) {
  element.innerHTML = element.innerHTML.split(' ')
      .map(word => `<span>${word}</span>`)
      .reduce((str, word) => str + " " + word);

  return element.children;

}

function toggleTheme() {
  document.body.classList.toggle("dark")
  document.body.classList.toggle("light")
}


module.exports = {spanWords, toggleTheme}


