import Factory from './factory';
import tagNames from './assets/data/tags.json';
import data from './assets/data/data.json';

const factory = new Factory();

const navContainer = document.getElementById('nav-container');
navContainer.append(
  factory.createList('ul', 'Tag', tagNames),
);

const typeFilter = new URLSearchParams(document.location.search).get('type');
const filteredPhotographers = data.photographers
  .filter(photographer => {
    return typeFilter ? photographer.tags.includes(typeFilter) : true;
  });
const photographerContainer = document.getElementById('photographers-container');
photographerContainer.append(
  factory.createList('ul', 'PhotographerCard', filteredPhotographers),
);

const filterPhotographs = function(tagName) {
  document.location.search = `type=${tagName}`;
};

const tags = document.querySelectorAll('.category-tag');
tags.forEach(tag => {
  tag.addEventListener('click', () => filterPhotographs(tag.value));
});
