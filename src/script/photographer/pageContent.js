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

  likePhoto() {

  }

  render(data) {
    this.elements.photoContainer.innerHTML = '';
    this.elements.photoContainer.append(
      factory.createList('ul', 'PhotoCard', data),
    );
  }

  initStorage() {
    this.likedPhotos = localStorage.getItem('likedPhotos');
    if(!Array.isArray(JSON.parse(this.likedPhotos))) {
      this.likedPhotos = JSON.stringify([]);
    }
    localStorage.setItem('likedPhotos', this.likedPhotos);
  }

  init() {
    this.initStorage();

    document.title = `${this.photographer.name} - FishEye`;
    this.elements.name.textContent = this.photographer.name;
    this.elements.name.setAttribute('tabindex', 0);
    this.elements.name.setAttribute('aria-label', `Prénom et nom du photographe: ${this.photographer.name}`);

    this.elements.place.textContent = `${this.photographer.city}, ${this.photographer.country}`;
    this.elements.place.setAttribute('tabindex', 0);
    this.elements.place.setAttribute('aria-label', `Ville et pays du photographe: ${this.photographer.city}, ${this.photographer.country}`);

    this.elements.tagline.textContent = this.photographer.tagline;
    this.elements.tagline.setAttribute('tabindex', 0);
    this.elements.tagline.setAttribute('aria-label', `slogan: ${this.photographer.tagline}`);

    const tags = factory.createList('ul', 'Tag', this.photographer.tags);
    this.elements.tagsContainer.append(tags);
    this.elements.avatar.src = `assets/pictures/avatars/${this.photographer.portrait}`;
    
    this.elements.photoContainer.append(
      factory.createList('ul', 'PhotoCard', this.media),
    );

    this.elements.likesTabQty.textContent = this.likesCount;
    this.elements.likesTabQty.setAttribute('tabindex', 0);
    this.elements.likesTabQty.setAttribute('aria-label', `Total des mentions like pour ce photographe : ${this.likesCount}`);
    this.elements.likesTabPrice.textContent = `${this.photographer.price}€/jour`;
    this.elements.likesTabPrice.setAttribute('tabindex', 0);
    this.elements.likesTabPrice.setAttribute('aria-label', `Tarif du photographe: ${this.photographer.price}€ par jour`);

    document.addEventListener(
      'newLike',
      (e) => {
        this.likesCount += e.detail ? 1 : -1;
        this.elements.likesTabQty.textContent = this.likesCount;
      },
    );
  }
  
}
