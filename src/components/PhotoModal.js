import Factory from '../script/factory';

export default class PhotoModal extends HTMLLIElement {

  constructor(data) {
    super();

    this.id = `modal-${data.id}`;
    this.type = data.image ? 'img' : 'video';
    this.classList.add('photo-modal__photo');
    this.setAttribute('tabindex', -1);
    this.setAttribute('role', 'group');
    this.setAttribute('aria-roledescription', 'slide');
    const factory = new Factory();
    const container = factory.createElement('div');
    container.classList.add('photo-modal__container');

    const view = factory.createElement(this.type);
    if (this.type === 'img') {
      view.src = `assets/pictures/${data.photographerId}/${data.image}`;
      view.alt = data.title;
    } else {
      const source = factory.createElement('source');
      source.src = `assets/pictures/${data.photographerId}/${data.video}`;
      source.type = 'video/mp4';
      view.setAttribute('controls', true);
      view.append(source);
    }
    view.classList.add('photo-modal__img');

    const title = factory.createElement('h2');
    title.textContent = data.title;
    title.classList.add('photo-modal__title');

    container.append(view, title);
    this.append(container);
  }

  static name = 'photo-modal'
  static extends = 'li'

}
