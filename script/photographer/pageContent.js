import Factory from '../factory';

const name = document.querySelector('.photographer-info__name');
const place = document.querySelector('.photographer-info__place');
const tagline = document.querySelector('.photographer-info__tagline');
const tagsContainer = document.querySelector('.photographer-info__tags');
const avatar = document.querySelector('.photographer-avatar');

const modalPhotoContainer = document.querySelector('.photo-modal__photo-container');
const photoContainer = document.querySelector('.photo-container');
const likesTabQty = document.querySelector('.likes-tab__qty');
const likesTabPrice = document.querySelector('.likes-tab__price');

const factory = new Factory();

export default class PhotographerPage {

  constructor(data) {
    this.photographer = data.photographer;
    this.media = data.media;
  }

  fillContent() {
    name.textContent = this.photographer.name;
    place.textContent = `${this.photographer.city}, ${this.photographer.country}`;
    tagline.textContent = this.photographer.tagline;
    const tags = factory.createList('ul', 'Tag', this.photographer.tags);
    tagsContainer.append(tags);
    avatar.src = `/assets/pictures/avatars/${this.photographer.portrait}`;
    
    photoContainer.append(
      factory.createList('ul', 'PhotoCard', this.media),
    );

    likesTabQty.textContent = this.media.reduce(
      (acc, curr) => acc + Number(curr.likes),
      0,
    );
    likesTabPrice.textContent = `${this.photographer.price}€/jour`;

    modalPhotoContainer.append(
      factory.createList('ul', 'PhotoModal', this.media),
    );
    
  }
  
}
