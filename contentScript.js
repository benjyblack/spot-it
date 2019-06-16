const titleEl = document.querySelector('h1');
const artistEl = titleEl.parentElement.querySelector('a');

const title = titleEl.textContent.replace(/chords/, '').trim();
const artist = artistEl.textContent;

alert(`${title} by ${artist}`);
