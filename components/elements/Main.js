import Factory from '../factory';
import store from '../../store';


export default class Main extends HTMLElement{
  
  constructor() {
    super();
    const factory = new Factory();

    
    const h1 = factory.createElement(
      'h1',
      { textContent: 'Nos photographes' }
    );
      
    store.subscribe(() => {
      this.setAttribute('update', true);
    });

    
    this.createPhotographerContainer = function() {
      return factory.createContainer(
        'photographer',
        store.getState().photographers,
        { classes: ['photographer-container'] },
        { classes: ['photographer-card'] }
        );
      };
      
    this.photographersContainer = this.createPhotographerContainer();

    this.append(
      h1, 
      this.photographersContainer,
    );
    
  }


  attributeChangedCallback(name) {
    if (name === 'update') {
      this.photographersContainer.remove();
      this.photographersContainer = this
        .createPhotographerContainer();
      this.append(this.photographersContainer);
    }
  }

  static get observedAttributes() {return ['update'];}
  static name = 'page-main';
  static extends = 'main';

}
