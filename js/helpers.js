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

