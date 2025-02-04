import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { My_store } from './Component/Store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={My_store}>
    <App />
  </Provider>,
)
