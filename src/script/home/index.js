import data from '../../../assets/data/data.json';
import HomePage from './pageContent';

const typeFilter = new URLSearchParams(document.location.search).get('type');

const filteredPhotographers = data.photographers
  .filter(photographer => {
    return typeFilter ? photographer.tags.includes(typeFilter) : true;
  });

new HomePage(filteredPhotographers);
