import { StringHelper } from '../utils';

export default class Tag extends HTMLLIElement {
  
  constructor(content, { original = true } = {}) {
    super();

    this.classList.add('category-tag');
    if (original) {
      this.checkbox = document.createElement('input');
      this.checkbox.classList.add('category-tag__checkbox');
      this.checkbox.type = 'checkbox';
      this.checkbox.id = `tag-${content}`;
      this.checkbox.name = content;
      this.checkbox.checked = false;
      this.append(this.checkbox);
    }
    
    this.label = document.createElement('label');
    this.label.classList.add('category-tag__label');
    this.label.setAttribute('for', `tag-${content}`);
    this.setAttribute('tabindex', 0);
    this.label.textContent = `#${StringHelper.capitalize(content)}`;

    this.append(this.label);
  }

  static name = 'nav-tag'
  static extends = 'li'

}
