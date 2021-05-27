import Factory from '../factory';
import tagNames from '../../../assets/data/tags.json';

const factory = new Factory();

export default class HomePage {

  constructor(data = {}) {
    this.photographers = data;
    this.init();
  }


  filterPhotographs(tagName) {
    document.location.search = `type=${tagName}`;
  }

  fillContent() {
    document.getElementById('nav-container').append(
      factory.createList('ul', 'Tag', tagNames),
    );

    document.getElementById('photographers-container').append(
      factory.createList('ul', 'PhotographerCard', this.photographers),
    );

    return this;
  }

  skipNav() {
    const contentFocusable = document.querySelector('main').querySelectorAll('a');
    contentFocusable[0].focus();
  }

  init() {
    this.fillContent();
    document.querySelectorAll('.category-tag').forEach(tag => {
      tag.addEventListener('click', () => this.filterPhotographs(tag.value));
    });

    document.querySelector('.skip-nav-btn')
      .addEventListener(
        'keydown',
        (e) => {
          if (e.code === 'Enter') {
            this.skipNav();
          }
        },
      );
    
    return this;
  }
  
}
