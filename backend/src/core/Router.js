import CC from './CommonClass';

class Router extends CC {
    executeAction(action) {
        return async (req, res, next) => {
            try {
                await action.run(req, res, next);
            } catch (err) {
                res.send(err)
            }
        }
    }
}

export default Router;