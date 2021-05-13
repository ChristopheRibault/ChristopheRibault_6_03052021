import Factory from '../factory';
import store from '../../store';


export default class Home extends HTMLElement{
  
  constructor() {
    super();
    this.pageType = 'home';
    this.title = 'Home - FishEye';
    this.url = '/';
    const factory = new Factory();

    store.subscribe(() => {
      this.setAttribute('update', true);
    });
    
    const h1 = factory.createElement(
      'h1',
      { textContent: 'Nos photographes' }
    );
      
    this.createPhotographerContainer = function() {
      return factory.createContainer(
        'photographerCard',
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
  static name = 'home-main';
  static extends = 'section';

}
