import Factory from '../script/factory';

export default class PhotographerCard extends HTMLLIElement {

  constructor(data) {
    super();
    const factory = new Factory();

    this.classList.add('photographer-card');
    // Avatar
    const photographerLink = factory.createElement('a');
    const avatar = factory.createElement('img');
    avatar.src = `./assets/pictures/avatars/${data.portrait}`;
    avatar.alt = '';
    avatar.classList.add('avatar-img', 'photographer-card__img');
    const name = factory.createElement('h2');
    name.textContent = data.name;
    name.classList.add('photographer-card__name', 'photographer-name');
    photographerLink.append(avatar, name);
    photographerLink.setAttribute('href', `/pages/photographer.html?id=${data.id}`);
    photographerLink.classList.add('photographer-card__link');


    const photographerInfo = factory.createElement('div');
    const place = factory.createElement('p');
    place.textContent = `${data.city}, ${data.country}`;
    place.classList.add('photographer-card__place', 'photographer-place');
    const tagline = factory.createElement('p');
    tagline.textContent = data.tagline;
    tagline.classList.add('photographer-card__tagline', 'photographer-tagline');
    const price = factory.createElement('p');
    price.textContent = `${data.price}€/jour`;
    price.classList.add('photographer-card__price', 'photographer-price');
    photographerInfo.append(place, tagline, price);
    photographerInfo.classList.add('photographer-card__info');


    const tags = factory.createList('ul', 'Tag', data.tags);
    tags.classList.add('photographer-card__tags');

    this.append(
      photographerLink,
      photographerInfo,
      tags,
    );
  }

  static name = 'photographer-card'
  static extends = 'li'

}
