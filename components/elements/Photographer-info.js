class PhotographerInfo extends HTMLDivElement{

  constructor(attributes) {
    super();
    this.classList.add('photographer-card__info');

    const place = document.createElement('p');
    place.textContent = `${attributes.city}, ${attributes.country}`;

    const tagline = document.createElement('p');
    tagline.textContent = attributes.tagline;

    const price = document.createElement('p');
    price.textContent = `${attributes.price}€/jour`;

    this.append(
      place,
      tagline,
      price,
    );
  }

}

export default {
  name: 'photographer-info',
  extend: 'div',
  constructor: PhotographerInfo,
};
