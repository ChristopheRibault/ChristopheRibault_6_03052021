class Logo extends HTMLAnchorElement{

  constructor() {
    super();
    this.id = 'page-logo';
    this.innerHTML = 'Fish<i class="fas fa-camera"></i>ye';
    this.classList.add('page-logo');
  }

}

export default {
  name: 'page-logo',
  extend: 'a',
  constructor: Logo,
};
