import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './Routes'
import reducers from './components/reducers'

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <Routes />
        </Provider>
    )
}

export default App