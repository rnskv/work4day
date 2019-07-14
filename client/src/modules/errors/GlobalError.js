import { TErrorGroup } from '@rnskv/terror';
import GlobalErrorsList from './GlobalErrorsList';
import GlobalHandler from './GlobalHandler';

const GlobalError = new TErrorGroup({ type: 'GLOBAL_ERROR' }, GlobalErrorsList);
GlobalError.setHandler(GlobalHandler);

console.log('GlobalError', GlobalError);

export default GlobalError;
