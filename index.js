import Factory from './components/factory';
import Router from './router';

document
  .getElementById('app')
  .prepend(
    new Factory()
      .createElement(
        'app',
        { id: 'app-container' }
      )
  );

const router = new Router();
router.pushHistoryState(
  { pageType: 'home' },
  'home',
  '/',
);
router.listenPopStateEvent();
