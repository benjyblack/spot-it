export const getTitleEl = () => document.querySelector('h1');
export const getHeaderEl = () => getTitleEl().parentElement;
export const getArtistEl = () => getHeaderEl().querySelector('a');
