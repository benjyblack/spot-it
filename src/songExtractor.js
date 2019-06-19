import { getTitleEl, getArtistEl } from './domReader';

const STOP_WORDS = ['chords', 'tab'];

export const getTitle = () => {
  const ignoredTitleWordsRegex = new RegExp(`${STOP_WORDS.join('|')}`, '');
  return getTitleEl().textContent.replace(ignoredTitleWordsRegex, '').trim();
};

export const getArtist = () => {
  return getArtistEl().textContent;
};
