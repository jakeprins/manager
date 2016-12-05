import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDoX9PTBB3jQECUhr2C5Y_cmuk2qof_81E',
      authDomain: 'manager-a38b1.firebaseapp.com',
      databaseURL: 'https://manager-a38b1.firebaseio.com',
      storageBucket: 'manager-a38b1.appspot.com',
      messagingSenderId: '816601445243'
    };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
