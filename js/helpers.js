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



// module.exports = {
//   spanWords
// }