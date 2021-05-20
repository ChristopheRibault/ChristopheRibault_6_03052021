import { StringHelper } from '../utils';

export default class Tag extends HTMLButtonElement {
  
  constructor(content) {
    super();
    this.value = content;
    this.classList.add('category-tag');
    this.textContent = `#${StringHelper.capitalize(content)}`;
  }

  static name = 'nav-tag'
  static extends = 'button'

}
