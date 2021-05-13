import store from '.';

function filterPhotographers(tagName) {
  store.dispatch({ type: 'filter', value: tagName });
}

export {
  filterPhotographers,
};