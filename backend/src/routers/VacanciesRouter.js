import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/vacancy';

const router = ERouter();

class VacanciesRouter extends Router {
    get router() {
        const { executeAction } = this;

        router.post('/vacancies', executeAction(actions.CreateAction));
        router.get('/vacancies', executeAction(actions.GetListAction));
        // router.get('/vacancies/:id', executeAction(actions.GetAction));
        router.delete('/vacancies/:id', executeAction(actions.DeleteAction));
        router.patch('/vacancies/:id', executeAction(actions.UpdateAction));

        return router;
    }
}

export default new VacanciesRouter();