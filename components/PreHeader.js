import React, { Component } from 'react';
import { Container, Title, Body, Left, Right, Icon, Header, Text, Button } from 'native-base';




export default class PreHeader extends Component {

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
            <Right />
          </Header>
    );
  }
}
