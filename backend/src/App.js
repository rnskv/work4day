import Server from './core/Server';
import Dao from './core/Dao';

import routers from './routers';
import middlewares from './middlewares';
import strategies from './services/auth/strategies';

import configs from './configs';

const dao = new Dao();
dao.connect().then(dao.successCb).catch(dao.errorCb);

const app = new Server({
   port: configs.app.port,
   host: configs.app.host,
   routers,
   middlewares,
   strategies
});
app.start().then(app.successCb).catch(app.errorCb);