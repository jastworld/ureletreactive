/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import Verify from './routes/Verify';
import Profile from './routes/Profile';
import Messages from './routes/Messages';
import Chat from './routes/Chat';
import Item from './routes/Item';
import ProfileEdit from './routes/ProfileEdit';
import Camera from './routes/Camera';
import MessageBox from './routes/MessageBox'
import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";
import { Message } from './node_modules/react-native-gifted-chat';


const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    },
    Verify: {
      screen: Verify,
    },
    Profile:{
      screen: Profile,
    },
    Messages:{
      screen: Messages,
    },
    Chat:{
      screen: Chat,
    },
    Item: {
      screen: Item,
    },
    ProfileEdit:{
      screen: ProfileEdit,
    },
    Camera:{
      screen: Camera,
    },
    MessageBox:{
      screen: MessageBox
    }
  },
  {
    //initialRouteName: 'Profile',
    initialRouteName: 'Camera',
    headerMode: 'none',
    mode: 'modal',
  }
);

export default class App extends Component{
  render() {
    return <Root>
      <RootStack />
      </Root>;
  }
}
