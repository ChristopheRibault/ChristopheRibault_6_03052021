import Factory from './factory';
import data from './assets/data/data.json';

const factory = new Factory();
const id = Number(new URLSearchParams(document.location.search).get('id'));

const photographerData = data.photographers.find(p => p.id === id);
const mediaData = data.media.filter(m => m.photographerId === id);
console.log(mediaData);

const name = document.querySelector('.photographer-info__name');
const place = document.querySelector('.photographer-info__place');
const tagline = document.querySelector('.photographer-info__tagline');
const tagsContainer = document.querySelector('.photographer-info__tags');
const avatar = document.querySelector('.photographer-avatar');

name.textContent = photographerData.name;
place.textContent = `${photographerData.city}, ${photographerData.country}`;
tagline.textContent = photographerData.tagline;
const tags = factory.createList('ul', 'Tag', photographerData.tags);
tagsContainer.append(tags);
avatar.src = `/assets/pictures/avatars/${photographerData.portrait}`;


const photoContainer = document.querySelector('.photo-container');
photoContainer.append(
  factory.createList('ul', 'PhotoCard', mediaData),
);

// Modal
const modalPhotoContainer = document.querySelector('.photo-modal__photo-container');
modalPhotoContainer.append(
  factory.createList('ul', 'PhotoModal', mediaData),
);

const modal = document.querySelector('.modal-bg');
const close = document.querySelector('.photo-modal__close');
const next = document.querySelector('.photo-modal__next');
const previous = document.querySelector('.photo-modal__previous');
const photoCards = document.querySelectorAll('.photo-card');
const photoModals = document.querySelectorAll('.photo-modal__photo');

let activePhotoIndex = 0;
let activePhoto = photoModals[activePhotoIndex];

const photoChangedEvent = new Event('photoChanged');
document.addEventListener('photoChanged', () => {
  activePhoto = photoModals[activePhotoIndex];
  photoModals.forEach(photo => photo.classList.remove('photo-modal__photo--active'));
  activePhoto.classList.add('photo-modal__photo--active');
});

const showModal = function(i) {
  modal.style.display = 'flex';
  activePhotoIndex = i;
  document.dispatchEvent(photoChangedEvent);
};

const closeModal = function() {
  modal.style.display = 'none';
};

const changePhoto = function(variation) {
  activePhotoIndex += variation;
  if (activePhotoIndex < 0) activePhotoIndex = mediaData.length -1;
  if (activePhotoIndex > mediaData.length - 1) activePhotoIndex = 0;
  document.dispatchEvent(photoChangedEvent);
};

close.addEventListener('click', closeModal);
next.addEventListener('click', () => changePhoto(1));
previous.addEventListener('click', () => changePhoto(-1));

photoCards.forEach((card, i) => {
  card.addEventListener('click', () => showModal(i));
});
