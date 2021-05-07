import Factory from './components/factory';

document
  .getElementById('app')
  .appendChild(
    new Factory()
      .createElement('app')
  );
