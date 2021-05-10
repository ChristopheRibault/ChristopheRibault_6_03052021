import store from '../store';

function filterPhotographers(tagName) {
  store.dispatch({ type: 'filter', value: tagName });
}

export {
  filterPhotographers,
};