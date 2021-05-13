export default class Avatar extends HTMLImageElement{

  constructor(file) {
    super();
    this.file = file;
    this.classList.add('avatar-picture');
    this.setAttribute('src', `assets/pictures/avatars/${this.file}`);
  }

  static name = 'avatar-img';
  static extends = 'img';

}
