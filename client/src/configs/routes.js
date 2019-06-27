import Home from 'src/containers/_Legacy/Home';
import Crm from 'src/containers/_Legacy/Crm';
import ComponentsPage from 'src/pages/Components';
import SearchPage from 'src/pages/Search';

export default {
  '/': { component: Home, exact: true },
  '/search': { component: SearchPage },
  '/crm': { component: Crm },
  '/components': { component: ComponentsPage },
};
