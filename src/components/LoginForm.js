import React, { Component } from 'react';
import firebase from 'firebase';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: ''}

  onButtonPress(){
    const { email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='example@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({email})}
            />
        </CardSection>

        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
        </CardSection>
      </Card>
    );
  }
}


const styles = {

}
export default LoginForm;
