import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Title, Body, Left, Right, Icon, Form, Item, Input, Header, FooterTab, Text, Button,Label, Footer,Toast } from 'native-base';
import AppHeader from '../components/AppHeader'
import PreHeader from '../components/PreHeader';
const config = require('../config');
import { Image,StyleSheet,Dimensions } from 'react-native';



export default class Register extends Component {
  constructor(props) {
      super(props);
      //this.handleRegister = this.handleRegister.bind(this);
      this.state = {
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    school: '',
                    major: '',
                    state: ''};          
      this.register = this.register.bind(this);
          
  }
  register = () => {
    if (!this.validate)
        return;
    fetch(config.api+'/adduser/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        school: this.state.school,
        major: this.state.major,
        state: this.state.state,

      }),
    }).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.status == "OK"){
          this.props.navigation.navigate('Verify');
        }else{
          Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: "#5cb85c" }
          })
        }
    })
    .catch((error) => {
      console.error(error);
    });;
  } 
  validate = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false){
          console.log("Email is invalid");
          this.setState({email:text})
          return false;
      }else {
          this.setState({email:text})
          console.log("Email is valid");
      }
  }
  render() {
    console.log(this.props)
    return (
      <Container>
        <PreHeader
          text = "Register"
          navigation={this.props.navigation}
        />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                onChangeText={(firstname) => this.setState({firstname})}
                value={this.state.firstname}
              />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                onChangeText={(lastname) => this.setState({lastname})}
                value={this.state.lastname}
              />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={(text) => this.validate(text)}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
              <Label>School</Label>
              <Input
                onChangeText={(school) => this.setState({school})}
                value={this.state.school}
              />
            </Item>
            <Item floatingLabel>
              <Label>Major</Label>
              <Input
                onChangeText={(major) => this.setState({major})}
                value={this.state.major}
              />
            </Item>
            <Item floatingLabel last>
              <Label>State</Label>
              <Input
                onChangeText={(state) => this.setState({state})}
                value={this.state.state}
              />
            </Item>
          </Form>
          <Body>
              <Text note>By clicking Join Now, you agree to Urelet user's agreement privacy policy</Text>
          </Body>
          <Button block info
            onPress={() => {
            /* 
            1. Navigate to the Details route with params 
             this.props.navigation.navigate('SignUp', {
               itemId: 86,
               otherParam: 'anything you want here',
             });
             */
            this.register();
           }}
            >
            <Text>JOIN NOW</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
           <Button full
             onPress={() => this.props.navigation.navigate('Login')}
             >
            <Text>Log In</Text>
          </Button>
        </FooterTab>
        </Footer>
      </Container>
    );
  }
}
