import Factory from '../script/factory';

export default class PhotoCard extends HTMLLIElement {

  constructor(data){
    super();
    const factory = new Factory();
    this.likesCount = data.likes;

    this.id = `card-${data.id}`;
    this.classList.add('photo-card');
    this.setAttribute('tabIndex', 0);

    const thumb = factory.createElement(data.image ? 'img' : 'video');
    thumb.src = `/assets/pictures/${data.photographerId}/${data.image || data.video}`;
    thumb.alt = data.title;
    thumb.classList.add('photo-card__img');

    const title = factory.createElement('h2');
    title.textContent = data.title;
    title.classList.add('photo-card__title');

    const likes = factory.createElement('div');
    likes.innerHTML = `${this.likesCount} <i class="fas fa-heart"></i>`;
    likes.classList.add('photo-card__likes');
    likes.addEventListener(
      'click',
      () => {
        this.likesCount += 1;
        likes.innerHTML = `${this.likesCount} <i class="fas fa-heart"></i>`;
        document.dispatchEvent(
          new Event('newLike'),
        );
      },
    );

    this.append(thumb, title, likes);
  }

  static name = 'photo-card'
  static extends = 'li'

}
