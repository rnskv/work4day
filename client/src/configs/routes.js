import Home from 'src/containers/_Legacy/Home';
import Crm from 'src/containers/_Legacy/Crm';
import ComponentsPage from 'src/pages/Components';

import SearchPage from 'src/pages/Search';
import AdminPage from 'src/pages/Admin';

export default {
  '/': { component: Home, exact: true },
  '/search': { component: SearchPage },
  '/admin': { component: AdminPage },
  '/crm': { component: Crm },
  '/components': { component: ComponentsPage },
};
