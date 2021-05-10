import { photographers } from '../assets/data/data.json';

export default function photographerReducer(
  state = { photographers },
  action,
) {
  switch (action.type) {
    case 'filter':
      return { 
        photographers: photographers
          .filter(photographer => {
            return photographer.tags.includes(action.value);
          }) 
      };
  
    default:
      return state;
  }
}
