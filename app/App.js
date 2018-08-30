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
            apiKey: "AIzaSyDsuOKuZuxmgrzYPQ-VNl7i2Y75PCLg4MM",
            authDomain: "whatsapp-clone-29cca.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-29cca.firebaseio.com",
            projectId: "whatsapp-clone-29cca",
            storageBucket: "whatsapp-clone-29cca.appspot.com",
            messagingSenderId: "680320742341"
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