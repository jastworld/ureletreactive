import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Title, Body, Left, Right, Icon, Form, Item, Input, Header, FooterTab, Text, Button,Label, Footer,Toast } from 'native-base';
import PreHeader from '../components/PreHeader';
const config = require('../config');
import {AsyncStorage } from 'react-native';



export default class ProfileEdit extends Component {
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
  }
  componentWillMount() {
    AsyncStorage.multiGet(['token', 'username'])
      .then((data) => {

        if (data[0][0] === "token") {
          console.log(data)
          fetch(config.api + '/profile/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: data[0][1],
            }),
          }).then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson)
              if (responseJson.status == "OK") {
                this.setState({
                  firstname: responseJson.fullname.split(" ")[0],
                  lastname: responseJson.fullname.split(" ")[1],
                  username: data[1][1],
                  email: responseJson.email,
                  rating: responseJson.rating,
                  school: responseJson.school,
                  state: responseJson.state,
                  major: responseJson.major,
                });
              } else {
                Toast.show({
                  text: "Unauthorized access",
                  buttonText: "Okay",
                  buttonTextStyle: { color: "#008000" },
                  buttonStyle: { backgroundColor: "#5cb85c" }
                })
                this.props.navigation.navigate('Login');
              }
            })
            .catch((error) => {
              console.log(error, "hgdjsgd")
              this.props.navigation.navigate('Login');
            });
        }
      }).catch(function (error) {
        console.log("Unauthorized access", error)
        this.props.navigation.navigate('Login');
      })
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
          text = "Edit Profile"
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
          <Button block info
            onPress={() => {
            /* 
            1. Navigate to the Details route with params 
             this.props.navigation.navigate('SignUp', {
               itemId: 86,
               otherParam: 'anything you want here',
             });
             */
            this.updateProfile();
           }}
            >
            <Text>UPDATE</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
