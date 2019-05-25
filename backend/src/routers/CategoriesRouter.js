import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/category';

const router = ERouter();

class VacanciesRouter extends Router {
    get router() {
        const { executeAction } = this;

        router.post('/category', executeAction(actions.CreateAction));
        router.get('/category', executeAction(actions.GetListAction));
        // router.get('/vacancies/:id', executeAction(actions.GetAction));
        // router.delete('/vacancies/:id', executeAction(actions.DeleteAction));
        router.patch('/categories/:id', executeAction(actions.UpdateAction));

        return router;
    }
}

export default new VacanciesRouter();