import Factory from '../factory';
import { photographers } from '../../assets/data/data.json';

export default class Main extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();
    const h1 = factory.createElement('h1');
    h1.textContent = 'Nos photographes';
    this.appendChild(h1);

    const container = factory.createContainer(
      'photographer',
      photographers,
      { classes: ['photographer-container'] },
      { classes: ['photographer-card'] }
    );
    this.appendChild(container);
  }

  static name = 'page-main';
  static extends = 'main';

}
