import { StringHelper } from '../../utils';

class Tag extends HTMLButtonElement{
  
  constructor(name) {
    super();
    this.textContent = `#${StringHelper.capitalize(name)}`;
  }

}

export default {
  name: 'nav-tag',
  extend: 'button',
  constructor: Tag,
};
