
import React, { Component } from 'react';
import { View} from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyDP5rcYHQvgZkhJxWMY7ZBwehd92hEeOkQ",
        authDomain: "auth-e3b7e.firebaseapp.com",
        databaseURL: "https://auth-e3b7e.firebaseio.com",
        projectId: "auth-e3b7e",
        storageBucket: "auth-e3b7e.appspot.com",
        messagingSenderId: "828585548299"
      });
  }

  render(){
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
