import Factory from '../factory';

class Header extends HTMLElement{
  
  constructor() {
    super();
    this.setAttribute('role', 'banner');
    const [ logo, nav ] = new Factory().createElements([ 'logo', 'nav' ]);
    this.append(logo, nav);
  }

}

export default {
  name: 'page-header',
  extend: 'header',
  constructor: Header,
};
