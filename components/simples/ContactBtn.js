export default class ContactBtn extends HTMLButtonElement{

  constructor() {
    super();
    this.classList.add('main-btn');
    this.innerHTML = 'Contactez-moi';
  }

  static name = 'contact-btn';
  static extends = 'button';

}
