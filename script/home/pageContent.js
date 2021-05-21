import Factory from '../factory';
import tagNames from '../../assets/data/tags.json';

const factory = new Factory();

export default class HomePage {

  constructor(data = {}) {
    this.photographers = data;
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

  init() {
    document.querySelectorAll('.category-tag').forEach(tag => {
      tag.addEventListener('click', () => this.filterPhotographs(tag.value));
    });
    
    return this;
  }
  
}
