import Factory from '../factory';
const factory = new Factory();

export default class PhotographerPage {

  constructor(data) {
    this.photographer = data.photographer;
    this.media = data.media;
    this.likesCount = this.media.reduce(
      (acc, curr) => acc + Number(curr.likes),
      0,
    );
    this.elements = {
      name: document.querySelector('.photographer-info__name'),
      place : document.querySelector('.photographer-info__place'),
      tagline : document.querySelector('.photographer-info__tagline'),
      tagsContainer : document.querySelector('.photographer-info__tags'),
      avatar : document.querySelector('.photographer-avatar'),
      modalPhotoContainer : document.querySelector('.photo-modal__photo-container'),
      photoContainer : document.querySelector('.photo-container'),
      likesTabQty : document.querySelector('.likes-tab__qty'),
      likesTabPrice : document.querySelector('.likes-tab__price'),
    };
    this.init();
  }

  render(data) {
    this.elements.photoContainer.innerHTML = '';
    this.elements.photoContainer.append(
      factory.createList('ul', 'PhotoCard', data),
    );
  }

  init() {
    document.title = `${this.photographer.name} - FishEye`;
    this.elements.name.textContent = this.photographer.name;
    this.elements.place.textContent = `${this.photographer.city}, ${this.photographer.country}`;
    this.elements.tagline.textContent = this.photographer.tagline;
    const tags = factory.createList('ul', 'Tag', this.photographer.tags);
    this.elements.tagsContainer.append(tags);
    this.elements.avatar.src = `/assets/pictures/avatars/${this.photographer.portrait}`;
    
    this.elements.photoContainer.append(
      factory.createList('ul', 'PhotoCard', this.media),
    );

    this.elements.likesTabQty.textContent = this.likesCount;
    this.elements.likesTabPrice.textContent = `${this.photographer.price}€/jour`;

    document.addEventListener(
      'newLike',
      () => {
        this.likesCount += 1;
        this.elements.likesTabQty.textContent = this.likesCount;
      },
    );
  }
  
}
