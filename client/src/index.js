import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.js'

import 'src/styles/variables.css'
import 'src/styles/default.css'
import MainStore from 'src/stores/Main'

ReactDOM.render(<App store={MainStore}/>, document.getElementById('root'));
