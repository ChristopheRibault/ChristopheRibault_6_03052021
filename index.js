import Factory from './components/factory';

document
  .getElementById('app')
  .prepend(
    new Factory()
      .createElement('app')
  );
