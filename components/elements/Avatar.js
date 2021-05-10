export default class Avatar extends HTMLDivElement{

  constructor(attributes) {
    super();
    this.classList.add('photographer-card__avatar');

    const image = document.createElement('img');
    image.classList.add('avatar-picture', 'photographer-card__img');
    image.src = `assets/pictures/avatars/${attributes.portrait}`;

    const name = document.createElement('h2');
    name.classList.add('photographer-card__name');
    name.textContent = attributes.name;

    this.append(
      image,
      name,
    );
  }

  static name = 'photographer-avatar';
  static extends = 'div';

}
