import Factory from '../script/factory';

export default class PhotoCard extends HTMLLIElement {

  constructor(data){
    super();
    const factory = new Factory();
    this.likesCount = data.likes;
    const incrementLikes = () => {
      this.likesCount += 1;
      likes.innerHTML = `${this.likesCount} <img src='./assets/heart.svg' alt='like icon'/>`;
      document.dispatchEvent(
        new Event('newLike'),
      );
    };

    this.id = `card-${data.id}`;
    this.classList.add('photo-card');

    const thumb = factory.createElement(data.image ? 'img' : 'video');
    thumb.src = `./assets/pictures/${data.photographerId}/${data.image || data.video}`;
    thumb.alt = data.title;
    thumb.classList.add('photo-card__img');
    thumb.setAttribute('tabIndex', 0);

    const title = factory.createElement('h2');
    title.textContent = data.title;
    title.classList.add('photo-card__title');

    const likes = factory.createElement('div');
    likes.innerHTML = `${this.likesCount} <img src='./assets/heart.svg' alt='like icon'/>`;
    likes.classList.add('photo-card__likes');
    likes.setAttribute('aria-label', 'likes');
    likes.addEventListener(
      'click',
      () => incrementLikes(),
    );
    likes.addEventListener(
      'keydown',
      (e) => {
        if(e.code === 'Enter') incrementLikes();
      },
    );
    likes.setAttribute('tabindex', 0);

    this.append(thumb, title, likes);
  }



  static name = 'photo-card'
  static extends = 'li'

}
