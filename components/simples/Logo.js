export default class Logo extends HTMLAnchorElement{

  constructor() {
    super();
    this.innerHTML = 'Fish<i class="fas fa-camera"></i>ye';
  }

  static name = 'page-logo';
  static extends = 'a';

}
