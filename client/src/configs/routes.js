import Home from 'src/containers/_Legacy/Home';
import Crm from 'src/containers/_Legacy/Crm';
import ComponentsPage from 'src/pages/main/Components';
import SearchPage from 'src/pages/main/Search';
import AdminPage from 'src/pages/crm/Offers';

export default {
  '/': { component: Home, exact: true },
  '/search': { component: SearchPage },
  '/admin': { component: AdminPage },
  '/crm/main': { component: Crm },
  '/crm/offers': { component: AdminPage },
  '/components': { component: ComponentsPage },
};
