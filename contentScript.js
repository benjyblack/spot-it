const STOP_WORDS = ['chords', 'tab'];

const titleEl = document.querySelector('h1');
const headerEl = titleEl.parentElement;
const artistEl = headerEl.querySelector('a');

const ignoredTitleWordsRegex = new RegExp(`${STOP_WORDS.join('|')}`, '');
const title = titleEl.textContent.replace(ignoredTitleWordsRegex, '').trim();
const artist = artistEl.textContent;

const playButton = document.createElement('button');
const playText = document.createTextNode('Play on Spotify');
playButton.appendChild(playText);

headerEl.appendChild(playButton);

playButton.addEventListener('click', function(){
  alert(`${title} by ${artist}`);
});
