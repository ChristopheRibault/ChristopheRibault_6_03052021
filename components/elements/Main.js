import Factory from '../factory';
import { photographers } from '../../assets/data/data.json';

export default class Main extends HTMLElement{
  
  constructor() {
    super();
    const h1 = document.createElement('h1');
    h1.textContent = 'Nos photographes';
    this.appendChild(h1);

    const container = new Factory().createElement(
      'itemsContainer', 
      { type: 'photographer', data: photographers },
    );
    this.appendChild(container);
  }

  static name = 'page-main';
  static extends = 'main';

}
