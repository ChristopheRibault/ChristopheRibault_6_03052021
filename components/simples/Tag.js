import { filterPhotographers } from '../../store/actions';
import { StringHelper } from '../../utils';

export default class Tag extends HTMLButtonElement{
  
  constructor(name) {
    super();
    this.textContent = `#${StringHelper.capitalize(name)}`;
    this.classList.add('category-tag');
    this.addEventListener('click', () => filterPhotographers(name));
  }

  static name = 'nav-tag';
  static extends = 'button';

}
