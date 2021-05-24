export default class Carousel {

  constructor(size) {
    this._size = size;
    this._current = 0;
    this.init();
  }

  set current(index) {
    if (index === 'next') {
      this.changePhoto(true);
      this._current = this.next;
      document.querySelectorAll('.photo-modal__photo')[this.next]
        .classList.add('photo-modal__photo--next');
    }
    if (index === 'prev') {
      this.changePhoto(false);
      this._current =this.prev;
      document.querySelectorAll('.photo-modal__photo')[this.prev]
        .classList.add('photo-modal__photo--previous');
    }

    if (typeof index === 'number') {
      this._current = index;
      document.querySelectorAll('.photo-modal__photo')[this.current]
        .classList.add('photo-modal__photo--active');
      document.querySelectorAll('.photo-modal__photo')[this.next]
        .classList.add('photo-modal__photo--next');
      document.querySelectorAll('.photo-modal__photo')[this.prev]
        .classList.add('photo-modal__photo--previous');
    }
  }

  get current() {
    return this._current;
  }

  get size() {
    return this._size;
  }

  set size(_) {
    throw new Error('Can\'t set carousel size');
  }

  get next() {
    return (this.current + 1 + this.size) % this.size;
  }

  get prev() {
    return (this.current - 1 + this.size) % this.size;
  }

  showModal(i) {
    document.querySelector('.modal-bg').style.display = 'flex';
    this.current = i;
  }
  
  closeModal() {
    document.querySelector('.modal-bg').style.display = 'none';
  }
  
  /**
   * Change current current
   *  add variation to increase or decrease index
   *  add size of carusel too loop back to last when index > 0
   *  %size to loop back to first when index > last
   * @param {boolean} next true if next, false if previous
   */
  changePhoto(next) {
    const oldPhoto = document.querySelectorAll('.photo-modal__photo')[this.current];
    const newPhoto = document.querySelectorAll('.photo-modal__photo')[next ? this.next : this.prev];

    oldPhoto.classList.replace(
      'photo-modal__photo--active',
      next ? 'photo-modal__photo--previous' : 'photo-modal__photo--next',
    );
    newPhoto.classList.replace(
      next ? 'photo-modal__photo--next' : 'photo-modal__photo--previous',
      'photo-modal__photo--active',
    );

    if (next) {
      document.querySelectorAll('.photo-modal__photo')[this.prev]
        .classList.remove('photo-modal__photo--previous');
    } else {
      document.querySelectorAll('.photo-modal__photo')[this.next]
        .classList.remove('photo-modal__photo--next');
    }
  }

  init() {
    document.querySelector('.photo-modal__close')
      .addEventListener('click', this.closeModal);

    document.querySelector('.photo-modal__next')
      .addEventListener('click', () => this.current = 'next');

    document.querySelector('.photo-modal__previous')
      .addEventListener('click', () => this.current = 'prev');

    document.querySelectorAll('.photo-card__img').forEach((card, i) => {
      card.addEventListener('click', () => this.showModal(i));
    });
  }

}
