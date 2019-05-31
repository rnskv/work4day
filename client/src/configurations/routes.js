import Home from "../containers/Home";
import Vacancies from "../containers/Vacancies";
import Crm from "../containers/Crm";
import ComponentsPage from '../pages/Components';

export default {
    '/': { component: Home, exact: true },
    '/vacancies': { component: Vacancies },
    '/crm': { component: Crm },
    '/test1': { component: Home },
    '/components': { component: ComponentsPage }
}