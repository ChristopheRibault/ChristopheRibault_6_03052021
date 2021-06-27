import Factory from '../factory';
import tagNames from '../../../assets/data/tags.json';

const factory = new Factory();

export default class HomePage {

  constructor(data = {}) {
    this.photographers = data;
    this.photographersContainer = document
      .getElementById('photographers-container');
    this.init();
  }

  filterPhotographs() {
    const activeTags = Array.from(
      document.forms.navigation.elements,
    )
      .filter(el => el.checked)
      .map(el => el.name);

    console.log(activeTags);

    let filteredPhotographers = this.photographers.filter(
      photograph => photograph.tags.some(
        tag => activeTags.includes(tag),
      ),
    );

    if (filteredPhotographers.length === 0) {
      filteredPhotographers = this.photographers;
    }

    this.renderPhotographers(filteredPhotographers);

  }

  renderPhotographers(photographers) {
    this.photographersContainer.innerHTML = '';

    this.photographersContainer.append(
      factory.createList('ul', 'PhotographerCard', photographers),
    );
  }

  fillContent() {
    document.getElementById('navigation-form').append(
      factory.createList('ul', 'Tag', tagNames),
    );

    this.renderPhotographers(this.photographers);
  }

  skipNav() {
    const contentFocusable = document.querySelector('main').querySelectorAll('a');
    contentFocusable[0].focus();
  }

  init() {
    this.fillContent();
    document.querySelectorAll('.category-tag').forEach(tag => {
      tag.addEventListener('click', () => this.filterPhotographs());
    });

    document.querySelectorAll('.category-tag').forEach(tag => {
      tag.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          const input = tag.querySelector('input');
          input.checked = !input.checked;
          this.filterPhotographs();
        }
      });
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
  }
  
}
