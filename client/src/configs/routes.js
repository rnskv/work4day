import Home from 'src/containers/_Legacy/Home'
import Crm from 'src/containers/_Legacy/Crm'
import ComponentsPage from 'src/pages/Components'

export default {
  '/': { component: Home, exact: true },
  '/crm': { component: Crm },
  '/components': { component: ComponentsPage }
}
