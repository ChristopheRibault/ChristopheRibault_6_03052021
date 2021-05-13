// import Factory from '../factory';

export default class PhotographerPage extends HTMLElement{
  
  constructor(data) {
    super();
    this.data = data;
    this.pageType = 'photographer';
    this.title = `${data.name} - FishEye`;
    this.url = `/${this.pageType}/${this.data.id}`,
    // const factory = new Factory();
    this.textContent = 'hello photographer';
    
  }


  static name = 'photographer-main';
  static extends = 'section';

}
