import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Body, Form, Item, Input, Header, FooterTab, Text, Button,Label, Footer,Toast } from 'native-base';
import PreHeader from '../components/PreHeader'
import { Image,StyleSheet,Dimensions } from 'react-native';
import icon,{width, height} from '../components/images/icon.jpeg';
const config = require('../config');


export default class Login extends Component {
  constructor(props) {
    super(props);
    //this.handleRegister = this.handleRegister.bind(this);
    this.state = {
                  username: '',
                  password: '',
                  access:'',
                  pw2: '',
                  vcode: '',
                  imgWidth: 0,
                  imgHeight: 0
                };          
    this.verifyUser = this.verifyUser.bind(this);
        
  }

  verifyUser = () => {
    if (this.state.pw2!=this.state.password){
      return;
    }   
    fetch(config.api+'/verify/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        access: this.state.vcode
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.status == "OK"){
          this.props.navigation.navigate('Home');
        }else{
          Toast.show({
            text: "Wrong access code!",
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

  componentWillMount() {
    const screenWidth = Dimensions.get('window').width;
    this.setState({imgWidth: screenWidth});

  }
  render() {
    const {imgWidth, imgHeight} = this.state
    return (
      <Container>
          <PreHeader
            text = "Verify Account"
            navigation={this.props.navigation}
          />
        <Content>
          <Body>
          <Image
            style={{width: 40, height: 40}}
            source={icon}
          />
          </Body>
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
            <Item floatingLabel last>
              <Label>Re-enter Password</Label>
              <Input 
                onChangeText={(pw2) => this.setState({pw2})}
                value={this.state.pw2}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Verification code</Label>
              <Input 
                onChangeText={(vcode) => this.setState({vcode})}
                value={this.state.vcode}
              />
            </Item>

          </Form>
          <Button block info
            onPress={() => {
           /* 1. Navigate to the Details route with params */
             this.verifyUser();
           }}
            >
            <Text>Verify</Text>
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
