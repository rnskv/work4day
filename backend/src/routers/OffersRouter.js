import Router from '../core/Router';
import { Router as ERouter } from 'express'
import actions from '../actions/offer';

const router = ERouter();

class OffersRouter extends Router {
  get router() {
    const { executeAction } = this;

    router.post('/offers', executeAction(actions.CreateAction));
    router.get('/offers', executeAction(actions.GetListAction));
    router.get('/offers/:id', executeAction(actions.GetAction));
    router.delete('/offers/:id', executeAction(actions.DeleteAction));
    router.patch('/offers/:id', executeAction(actions.UpdateAction));

    return router;
  }
}

export default new OffersRouter();
