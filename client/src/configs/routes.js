import Home from 'src/containers/Home'
import Crm from 'src/containers/Crm'
import ComponentsPage from 'src/pages/Components'

export default {
  '/': { component: Home, exact: true },
  '/crm': { component: Crm },
  '/components': { component: ComponentsPage }
}
