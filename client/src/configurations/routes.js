import Home from "../containers/Home";
import Vacancies from "../containers/Vacancies";

export default {
    '/': { component: Home, exact: true },
    '/vacancies': { component: Vacancies },
    '/test1': { component: Home },
    '/test2': { component: Home }
}