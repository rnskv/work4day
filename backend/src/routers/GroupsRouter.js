import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/group';

const router = ERouter();

class VacanciesRouter extends Router {
    get router() {
        const { executeAction } = this;

        router.get('/group', executeAction(actions.CreateAction));
        router.get('/groups', executeAction(actions.GetListAction));
        // router.get('/vacancies/:id', executeAction(actions.GetAction));
        // router.delete('/vacancies/:id', executeAction(actions.DeleteAction));
        router.patch('/groups/:id', executeAction(actions.UpdateAction));

        return router;
    }
}

export default new VacanciesRouter();