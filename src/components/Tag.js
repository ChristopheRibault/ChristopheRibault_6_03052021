import { StringHelper } from '../utils';

export default class Tag extends HTMLLIElement {
  
  constructor(content) {
    super();
    const tag = document.createElement('button');
    tag.value = content;
    tag.classList.add('category-tag');
    tag.textContent = `#${StringHelper.capitalize(content)}`;
    this.append(tag);
  }

  static name = 'nav-tag'
  static extends = 'li'

}
