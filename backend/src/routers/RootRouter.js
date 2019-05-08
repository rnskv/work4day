import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/root';

const router = ERouter();

class RootRouter extends Router {
    get router() {
        const { executeAction } = this;

        router.get('/', executeAction(actions.HelloAction));
        router.get('/test', executeAction(actions.TestAction));

        return router;
    }
}

export default new RootRouter();