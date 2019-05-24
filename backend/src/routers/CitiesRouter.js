import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/city';

const router = ERouter();

class CitiesRouter extends Router {
    get router() {
        const { executeAction } = this;

        router.get('/city', executeAction(actions.GetListAction));
        router.post('/city', executeAction(actions.CreateAction));

        return router;
    }
}

export default new CitiesRouter();