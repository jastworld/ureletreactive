import React, { Component } from 'react';
import {Title, Body, Left, Right, Icon, Header, Button,ActionSheet } from 'native-base';

var BUTTONS = ["Edit Profile", "About Urelet","Cancel"];
var EDIT_PROFILE_INDEX = 0;
var ABOUT_US =1
var CANCEL_INDEX = 2;

export default class ProfileHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Header>
            <Left>
              <Button transparent
                 onPress={() => this.props.navigation.goBack()}
                >
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.text}</Title>
            </Body>
            <Right>
              <Button transparent 
                 onPress={() => 
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      //destructiveButtonIndex: CANCEL_INDEX,
                      title: "Profile Actions"
                    },
                    buttonIndex => {
                      this.setState({ clicked: BUTTONS[buttonIndex] });
                      if(buttonIndex === EDIT_PROFILE_INDEX){
                        this.props.navigation.navigate('ProfileEdit')
                      }else if(buttonIndex === ABOUT_US){
                        alert("Yes Love")
                      }else if(buttonIndex ===CANCEL_INDEX){
                        //alert("Whatever")
                      }else{
                        alert("UNKNOWN")
                      }
                    }
                  )}
              >
                <Icon name='menu' />
              </Button>
            </Right>

          </Header>
    );
  }
}
