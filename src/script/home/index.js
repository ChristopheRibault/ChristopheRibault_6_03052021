import data from '../../../assets/data/data.json';
import HomePage from './pageContent';

// const typeFilter = new URLSearchParams(document.location.search).get('type');

new HomePage(data.photographers);
