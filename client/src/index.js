import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.js'

import './styles/variables.css'
import './styles/default.css'
import MainStore from './stores/Main'

ReactDOM.render(<App store={MainStore}/>, document.getElementById('root'))
