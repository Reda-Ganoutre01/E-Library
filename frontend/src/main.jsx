import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
<StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
