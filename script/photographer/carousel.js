import Factory from '../factory';
const factory = new Factory();

export default class Carousel {

  constructor(media) {
    this._media = media;
    this._size = media.length;
    this._current = 0;
    this.bg = document.querySelector('.modal-bg');
    this.caruselPhotoContainer = document
      .querySelector('.photo-modal__photo-container');
    this.closeBtn = document.querySelector('.photo-modal__close');
    this.nextBtn = document.querySelector('.photo-modal__next');
    this.prevBtn = document.querySelector('.photo-modal__previous');
    this.cardImages = document.querySelectorAll('.photo-card__img');

    this.init();
    this.photos = document.querySelectorAll('.photo-modal__photo');
  }

  set current(index) {
    if (index === 'next') {
      this.changePhoto(true);
      this._current = this.next;
      this.photos[this.next]
        .classList.add('photo-modal__photo--next');
    }
    if (index === 'prev') {
      this.changePhoto(false);
      this._current =this.prev;
      this.photos[this.prev]
        .classList.add('photo-modal__photo--previous');
    }

    if (typeof index === 'number') {
      this._current = index;
      this.photos[this.current]
        .classList.add('photo-modal__photo--active');
      this.photos[this.next]
        .classList.add('photo-modal__photo--next');
      this.photos[this.prev]
        .classList.add('photo-modal__photo--previous');
    }
  }

  get media() {
    return this._media;
  }

  set media(_) {
    throw new Error('Can\'t set carousel media');
  }

  get size() {
    return this._size;
  }

  set size(_) {
    throw new Error('Can\'t set carousel size');
  }

  get current() {
    return this._current;
  }

  get next() {
    return (this.current + 1 + this.size) % this.size;
  }

  get prev() {
    return (this.current - 1 + this.size) % this.size;
  }

  showModal(i) {
    this.bg.style.display = 'flex';
    this.current = i;
  }
  
  closeModal() {
    this.bg.style.display = 'none';
    this.photos.forEach(photo => {
      photo.classList.remove(
        'photo-modal__photo--active',
        'photo-modal__photo--next',
        'photo-modal__photo--previous',
      );
    });
  }
  
  /**
   * Change current current
   *  add variation to increase or decrease index
   *  add size of carusel too loop back to last when index > 0
   *  %size to loop back to first when index > last
   * @param {boolean} next true if next, false if previous
   */
  changePhoto(next) {
    const oldPhoto = this.photos[this.current];
    const newPhoto = this.photos[next ? this.next : this.prev];

    oldPhoto.classList.replace(
      'photo-modal__photo--active',
      next ? 'photo-modal__photo--previous' : 'photo-modal__photo--next',
    );
    newPhoto.classList.replace(
      next ? 'photo-modal__photo--next' : 'photo-modal__photo--previous',
      'photo-modal__photo--active',
    );

    if (next) {
      this.photos[this.prev]
        .classList.remove('photo-modal__photo--previous');
    } else {
      this.photos[this.next]
        .classList.remove('photo-modal__photo--next');
    }
  }

  init() {
    this.caruselPhotoContainer.append(
      factory.createList('ul', 'PhotoModal', this.media),
    );
    this.closeBtn
      .addEventListener('click', () => this.closeModal());
    this.nextBtn
      .addEventListener('click', () => this.current = 'next');
    this.prevBtn
      .addEventListener('click', () => this.current = 'prev');
    this.cardImages.forEach((card, i) => {
      card.addEventListener('click', () => this.showModal(i));
    });
  }

  unmount() {
    this.caruselPhotoContainer.innerHTML = '';
    this.closeBtn.replaceWith(this.closeBtn.cloneNode(true));
    this.nextBtn.replaceWith(this.nextBtn.cloneNode(true));
    this.prevBtn.replaceWith(this.prevBtn.cloneNode(true));
    this.cardImages.forEach(
      card => card.replaceWith(card.cloneNode(true)),
    );
  }

}
