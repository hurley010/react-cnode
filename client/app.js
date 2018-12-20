import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App.jsx'

const root = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <Component />,
        root
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App').default
        render(NextApp)
    })
}
