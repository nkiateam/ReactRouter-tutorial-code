import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/index.less'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const render = Component => {
    const rootElement = document.getElementById('root')
    rootElement.style.height = '100%'
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootElement,
    )
}

render(App)
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}

serviceWorker.unregister()
