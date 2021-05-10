import Factory from '../factory';
import { photographers } from '../../assets/data/data.json';

class Main extends HTMLElement{
  
  constructor() {
    super();
    const h1 = document.createElement('h1');
    h1.textContent = 'Nos photographes';
    this.appendChild(h1);

    const container = new Factory().createElement(
      'itemsContainer', 
      { type: 'photographer', data: photographers },
    );
    console.log(container);
    this.appendChild(container);
  }

}

export default {
  name: 'page-main',
  extend: 'main',
  constructor: Main,
};
