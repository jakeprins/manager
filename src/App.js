import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyDoX9PTBB3jQECUhr2C5Y_cmuk2qof_81E',
      authDomain: 'manager-a38b1.firebaseapp.com',
      databaseURL: 'https://manager-a38b1.firebaseio.com',
      storageBucket: 'manager-a38b1.appspot.com',
      messagingSenderId: '816601445243'
    };

  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
