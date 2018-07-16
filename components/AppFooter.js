import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class AppFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
                onPress={() => this.props.navigation.navigate('Home')}
              >
              <Icon name="paper" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Messages')}
              >
              <Icon name="chatboxes" />
            </Button>
            <Button active>
              <Icon active name="pulse" />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Profile')}
              >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
