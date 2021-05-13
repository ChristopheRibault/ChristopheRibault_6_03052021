import Factory from '../components/factory';

export default class Router {

  constructor() {
    if (Router.exists) return Router.instance;

    Router.instance = this;
    Router.exists = true;
  }

  switchPage(pageElement) {
    const id = pageElement.data?.id || null;
    const { pageType, title, url } = pageElement;
    this.changeDocumentTitle(title);
    this.loadNewContent(pageElement);
    this.pushHistoryState(
      { id, pageType },
      `${pageType}-${id}`,
      url,
    );
    console.log(window.history);
  }

  /**
   * 
   * @param {string} newPageTitle 
   */
  changeDocumentTitle(newPageTitle) {
    document.title = newPageTitle;
  }

  /**
   * Changes page to be shown
   * @param {HTMLElement} element 
   */
  loadNewContent(element) {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = '';
    pageContent.appendChild(element);
  }

  /**
   * 
   * @param {any} data 
   * @param {string} title 
   * @param {string} url 
   * @returns {void}
   */
  pushHistoryState(data, title, url) {
    return window.history.pushState(data, title, url);
  }

  /**
   * create a page element
   * @param {string} type 
   * @param {string|number} id 
   * @returns {HTMLElement}
   */
  createPage(type, id) {
    const factory = new Factory();

    switch (type) {
      case 'home':
        return factory.createElement(
          'homePage',
          { classe: ['home-page'] },
        );

      case 'photographer':
        return factory.createElement(
          'photographerPage',
          { classe: ['photographer-page'] },
          { id },
        );
    
      default:
        return null;
    }
  }

  listenPopStateEvent() {
    window.addEventListener('popstate', event => {
      this.switchPage(
        this.createPage(
          event.state.pageType,
          event.state.id,
        )
      );
    });

  }

}