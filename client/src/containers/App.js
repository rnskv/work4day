import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import routes from 'src/configs/routes';
import RouterView from 'src/modules/router';
import stores from 'src/stores';

import 'src/styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <RouterView routes={routes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
