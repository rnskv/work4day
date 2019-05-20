import CC from './CommonClass';

class Router extends CC {
    executeAction(action) {
        return async (req, res, next) => {
            try {
                console.log('run action', action);

                await action.run(req, res, next);
            } catch (err) {
                console.log('Find error', err);
                res.json(err)
            }
        }
    }
}

export default Router;