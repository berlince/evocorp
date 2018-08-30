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
            apiKey: "AIzaSyCMParCjru6-DnJIJ4ckFDfYAprV0NWJq0",
            authDomain: "whatsapp-clone-bb1b5.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-bb1b5.firebaseio.com",
            projectId: "whatsapp-clone-bb1b5",
            storageBucket: "whatsapp-clone-bb1b5.appspot.com",
            messagingSenderId: "1098719908151"
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