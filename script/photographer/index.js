import PhotographerPage from './pageContent';
import Carousel from './carousel';
import data from '../../assets/data/data.json';

const id = Number(new URLSearchParams(document.location.search).get('id'));

const photographerData = {
  photographer: data.photographers.find(p => p.id === id),
  media: data.media.filter(m => m.photographerId === id),
};

new PhotographerPage(photographerData).fillContent();
new Carousel(photographerData.media.length).init();
