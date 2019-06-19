import { getHeaderEl } from './domReader';
import { getTitle, getArtist } from './songExtractor';

export const addPlayButton = () => {
  const title = getTitle();
  const artist = getArtist();

  const playButton = document.createElement('button');
  const playText = document.createTextNode('Play on Spotify');
  playButton.appendChild(playText);

  getHeaderEl().appendChild(playButton);

  playButton.addEventListener('click', function () {
    alert(`${title} by ${artist}`);
  });
};
