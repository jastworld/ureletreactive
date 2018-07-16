import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Form, Item, Input, Header, Left, Button, Text, FooterTab, Icon, Body, Title, Right,Label, Footer} from 'native-base';
export default class SignUp extends Component<Props> {

  constructor(props){
    super(props)
    this.pullname = this.pullname.bind(this)
  }

  componentWillMount(){
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        </Content>
        <Footer>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <FooterTab>

            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}
