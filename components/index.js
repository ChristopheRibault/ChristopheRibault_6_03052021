import app from './App';
import * as simples from './simples';
import * as blocks from './blocks';
import * as layout from './layout';
import * as pages from './pages';

export default {
  app,
  ...simples,
  ...blocks,
  ...layout,
  ...pages,
};
