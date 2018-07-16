import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import AppFooter from '../components/AppFooter'
import PreHeader from '../components/PreHeader'

export default class Messages extends Component {
  render() {
    return (
      <Container>
        <PreHeader
          text = "Messages"
          navigation={this.props.navigation}
        />
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={15} source={{ uri: 'https://i1.rgstatic.net/ii/profile.image/490409156714498-1493934062601_Q512/Tayo_Amuneke.jpg' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <AppFooter
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}
