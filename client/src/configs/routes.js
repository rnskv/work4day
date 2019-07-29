import Home from 'src/containers/_Legacy/Home';
import CrmView from 'src/containers/crm/View';
import ComponentsPage from 'src/pages/product/Components';
import SearchPage from 'src/pages/product/Search';
import AdminPage from 'src/pages/crm/Offers';

export default {
  '/': { component: Home, exact: true },
  '/search': { component: SearchPage },
  '/admin': { component: AdminPage },
  '/crm': { component: CrmView },
};
