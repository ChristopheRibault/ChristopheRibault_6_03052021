import Factory from '../script/factory';

export default class PhotoCard extends HTMLLIElement {

  constructor(data){
    super();
    this._data = data;
    const factory = new Factory();
    this.liked = JSON.parse(localStorage.getItem('likedPhotos')).includes(this.data.id);
    this.likesCount = this.data.likes + this.liked;

    this.id = `card-${this.data.id}`;
    this.classList.add('photo-card');

    this.thumb = factory.createElement(this.data.image ? 'img' : 'video');
    this.thumb.src = `./assets/pictures/${this.data.photographerId}/${this.data.image || this.data.video}`;
    this.thumb.alt = this.data.alt_text;
    this.thumb.classList.add('photo-card__img');
    this.thumb.setAttribute('tabIndex', 0);

    this.photoTitle = factory.createElement('h2');
    this.photoTitle.textContent = this.data.title;
    this.photoTitle.classList.add('photo-card__title');

    this.likes = factory.createElement('div');
    this.likes.innerHTML = `${this.likesCount} <img src='assets/heart.svg' alt='like icon'/>`;
    this.likes.setAttribute('role', 'button');
    this.likes.setAttribute('aria-pressed', this.liked);
    this.likes.setAttribute('aria-label', `${this.likesCount} likes`);

    if (this.liked) this.likes.style['font-weight'] = 900;
    this.likes.classList.add('photo-card__likes');
    this.likes.addEventListener(
      'click',
      () => this.likeAction(),
    );
    this.likes.addEventListener(
      'keydown',
      (e) => {
        if(e.code === 'Enter') this.likeAction();
      },
    );
    this.likes.setAttribute('tabindex', 0);

    this.append(this.thumb, this.photoTitle, this.likes);
  }

  get data() {
    return this._data;
  }

  set data(_) {
    throw new Error('Can\'t set data');
  }

  likeAction() {
    if (this.liked) {
      this.like(false);
    } else {
      this.like(true);
    }
  }

  like(like = true) {
    this.likesCount += like ? 1 : -1;
    this.likes.innerHTML = `${this.likesCount} <img src='assets/heart.svg' alt='like icon'/>`;
    this.likes.style['font-weight'] = like ? 900 : 400;
    this.likes.setAttribute('aria-pressed', like);
    this.liked = like;
    const likedPhotos = JSON.parse(localStorage.getItem('likedPhotos'));

    if (like) {
      likedPhotos.push(this.data.id);
    } else {
      likedPhotos.splice(likedPhotos.indexOf(this.data.id),1);
    }
    
    localStorage.setItem(
      'likedPhotos',
      JSON.stringify(likedPhotos),
    );
    document.dispatchEvent(
      new CustomEvent('newLike', { detail: like }),
    );
  }



  static name = 'photo-card'
  static extends = 'li'

}
