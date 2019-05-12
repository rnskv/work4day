import Home from "../containers/Home";
import Vacancies from "../containers/Vacancies";
import Crm from "../containers/Crm";

export default {
    '/': { component: Home, exact: true },
    '/vacancies': { component: Vacancies },
    '/crm': { component: Crm },
    '/test1': { component: Home },
    '/test2': { component: Home }
}