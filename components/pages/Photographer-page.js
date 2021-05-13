import Factory from '../factory';
import { photographers } from '../../assets/data/data.json';

export default class PhotographerPage extends HTMLElement{
  
  constructor(id) {
    super();

    this.data = photographers.find(p => p.id === id);
    this.pageType = 'photographer';
    this.title = `${this.data.name} - FishEye`;
    this.url = `/${this.pageType}/${this.data.id}`;

    const factory = new Factory();
    const photographerDetails = factory.createElement(
      'photographerDetails',
      { classes: ['photographer-details'] },
      this.data,
    );

    this.append(
      photographerDetails,
    );
  }


  static name = 'photographer-main';
  static extends = 'section';

}
