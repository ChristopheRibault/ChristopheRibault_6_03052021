import PhotographerPage from './pageContent';
import Carousel from './carousel';
import ContactForm from './contactForm';
import Dropdown from './dropdown';
import data from '../../../assets/data/data.json';

const id = Number(new URLSearchParams(document.location.search).get('id'));

const photographerData = {
  photographer: data.photographers.find(p => p.id === id),
  media: data.media.filter(m => m.photographerId === id),
};

const page = new PhotographerPage(photographerData);
new Dropdown();
let carousel = new Carousel(photographerData.media);
new ContactForm(photographerData.photographer.name);

document.addEventListener('orderList', (e) => {
  photographerData.media.sort((a, b) => {
    if (a[e.detail] <= b[e.detail]) return -1;
    return 1;
  });

  // For popularity, show more likes first
  if (e.detail === 'likes') photographerData.media.reverse();
  page.render(photographerData.media);
  
  carousel.unmount();
  carousel = new Carousel(photographerData.media);
});
