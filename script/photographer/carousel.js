export default class Carousel {

  constructor(size) {
    this._size = size;
    this._activeIndex = 0;
  }

  set activeIndex(index) {
    document.querySelectorAll('.photo-modal__photo')[this.activeIndex]
      .classList.remove('photo-modal__photo--active');
    this._activeIndex = index;
    document.querySelectorAll('.photo-modal__photo')[this.activeIndex]
      .classList.add('photo-modal__photo--active');
  }

  get activeIndex() {
    return this._activeIndex;
  }

  get size() {
    return this._size;
  }

  set size(_) {
    throw new Error('Can\'t set carousel size');
  }

  showModal(i) {
    document.querySelector('.modal-bg').style.display = 'flex';
    this.activeIndex = i;
  }
  
  closeModal() {
    document.querySelector('.modal-bg').style.display = 'none';
  }
  
  /**
   * Change current activeIndex
   *  add variation to increase or decrease index
   *  add size of carusel too loop back to last when index > 0
   *  %size to loop back to first when index > last
   * @param {number} variation 
   */
  changePhoto(variation) {
    // eslint-disable-next-line max-len
    this.activeIndex = (this.activeIndex + variation + this.size) % this.size;
  }

  init() {
    document.querySelector('.photo-modal__close')
      .addEventListener('click', this.closeModal);

    document.querySelector('.photo-modal__next')
      .addEventListener('click', () => this.changePhoto(1));

    document.querySelector('.photo-modal__previous')
      .addEventListener('click', () => this.changePhoto(-1));

    document.querySelectorAll('.photo-card__img').forEach((card, i) => {
      card.addEventListener('click', () => this.showModal(i));
    });
  }

}
