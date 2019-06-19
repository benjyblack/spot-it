const STOP_WORDS = ['chords', 'tab'];

const getTitleEl = () => document.querySelector('h1');

const songExtractor = {
  getTitle: () => {
    const titleEl = getTitleEl();

    const ignoredTitleWordsRegex = new RegExp(`${STOP_WORDS.join('|')}`, '');
    return titleEl.textContent.replace(ignoredTitleWordsRegex, '').trim();
  },
  getArtist: () => {
    const headerEl = getTitleEl().parentElement;
    const artistEl = headerEl.querySelector('a');

    return artistEl.textContent;
  },
};

export default songExtractor;

// const playButton = document.createElement('button');
// const playText = document.createTextNode('Play on Spotify');
// playButton.appendChild(playText);
//
// headerEl.appendChild(playButton);

// playButton.addEventListener('click', function(){
//   alert(`${title} by ${artist}`);
// });
