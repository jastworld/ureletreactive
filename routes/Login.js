import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Form, Item, Input, Header, FooterTab, Text, Button,Label, Footer,Toast } from 'native-base';
import AppHeader from '../components/AppHeader'
import { Image, AsyncStorage, StyleSheet,Dimensions } from 'react-native';
import icon,{width, height} from '../components/images/icon.jpeg';
const config = require('../config');


export default class Login extends Component {
  state = {
    imgWidth: 0,
    imgHeight: 0,
    username:"",
    password:""
  }
  loginUser = () => {  
    fetch(config.api+'/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        if (responseJson.status == "OK"){
          AsyncStorage.multiSet([
            ['token', responseJson.token],
            ['username', responseJson.username]
          ])
          this.props.navigation.navigate('Home');
        }else{
          Toast.show({
            text: "Wrong username or password!",
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: "#5cb85c" }
          })
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  componentWillMount() {
    const screenWidth = Dimensions.get('window').width;
    this.setState({imgWidth: screenWidth});
    
    fetch(config.api)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
    });

  }
  render() {
    const {imgWidth, imgHeight} = this.state
    return (
      <Container
        >
        <Content>
          <Image
            style={{width: imgWidth}}
            source={icon}
          />
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input 
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
                onChangeText={(password) => this.setState({password})} 
                value={this.state.password}
              />
            </Item>

          </Form>
          <Button block info
            onPress={() => {
           /* 1. Navigate to the Details route with params */
            this.loginUser()
           }}
            >
            <Text>Log In</Text>
          </Button>

          <Button block transparent
            onPress={() => {
           /* 1. Navigate to the Details route with params */
             this.props.navigation.navigate('Verify');
           }}
            >
            <Text>Verify Account</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
           <Button full
             onPress={() => this.props.navigation.navigate('Register')}
             >
            <Text>Create New Account</Text>
          </Button>
        </FooterTab>
        </Footer>
      </Container>
    );
  }
}
