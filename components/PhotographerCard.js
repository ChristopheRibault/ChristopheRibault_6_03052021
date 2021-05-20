import Factory from '../factory';

export default class PhotographerCard extends HTMLElement {

  constructor(data) {
    super();
    const factory = new Factory();

    this.classList.add('photographer-card');
    // Avatar
    const photographerLink = factory.createElement('a');
    const avatar = factory.createElement('img');
    avatar.src = `/assets/pictures/avatars/${data.portrait}`;
    avatar.alt = '';
    avatar.classList.add('avatar-img');
    const name = factory.createElement('h2');
    name.textContent = data.name;
    photographerLink.append(avatar, name);
    photographerLink.setAttribute('href', `/pages/photographer.html?id=${data.id}`);

    const photographerInfo = factory.createElement('div');
    const place = factory.createElement('p');
    place.textContent = `${data.city}, ${data.country}`;
    const tagline = factory.createElement('p');
    tagline.textContent = data.tagline;
    const price = factory.createElement('p');
    price.textContent = `${data.price}€/jour`;
    photographerInfo.append(place, tagline, price);

    const tags = factory.createList('ul', 'Tag', data.tags);

    this.append(
      photographerLink,
      photographerInfo,
      tags,
    );
  }

  static name = 'photographer-card'
  static extends = 'article'

}
