import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Routes from './Routes'
import reducers from './reducers'

class App extends Component {

    componentWillMount(){
        // Initialize Firebase
        let config = {
            apiKey: "AIzaSyDbpl3PX8dgxj3yIBTbzdw3z45eP0kb4nY",
            authDomain: "whatsapp-clone-3c084.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-3c084.firebaseio.com",
            projectId: "whatsapp-clone-3c084",
            storageBucket: "whatsapp-clone-3c084.appspot.com",
            messagingSenderId: "451390950065"
        }
            firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        )
    }
}

export default App