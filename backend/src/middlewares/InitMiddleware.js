import Middleware from "../core/Middleware";
import configs from '../configs';

class InitMiddleware extends Middleware {
    init() {
        console.log(`init middleware ${this.constructor.name}`)
    }

    handler() {
        return (req, res, next) => {
            // res.header('Server', configs.app.name);
            next()
        }
    }
}

export default new InitMiddleware();