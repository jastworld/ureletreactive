import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Icon, Content, List, ListItem, Thumbnail, Button, Text, Body, Tab, Tabs, TabHeading, } from 'native-base';
import { ImageBackground, Image, StyleSheet, Platform, View, ListView, AsyncStorage } from 'react-native';
import AppFooter from '../components/AppFooter';
import ProfileHead from '../components/ProfileHead';
//import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Following from '../components/profileComponents/Following'
import Followers from '../components/profileComponents/Follower'
import Listings from '../components/profileComponents/Product'
const config = require('../config');


const styles = StyleSheet.create({
  profileBox: {
    flex: 1,
    alignSelf: 'stretch'
  },
  topArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
    flex: 1,
  },
  userImage: {
    //borderColor: mainColor,
    borderRadius: 50,
    borderWidth: 3,
    height: 100,
    marginBottom: 15,
    width: 100,
    flex: 1,
  },
  profileInfo: {
    flex: 3,
    margin: 10,
  },
  bottomArea: {
    flex: 3,
    backgroundColor: 'red'
  },
  profileImageArea: {
    flexDirection: 'row'
  }
})






export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      rating: "",
      school: "",
      state: "",
      major: "",
    }
    //console.log(props)
  }

  componentWillMount() {
    AsyncStorage.multiGet(['token', 'username'])
      .then((data) => {

        if (data[0][0] === "token") {
          console.log(data[0][1])
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
                  fullname: responseJson.fullname,
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


  render() {
    return (
      <Container>
        <ProfileHead
          text="Profile"
          navigation={this.props.navigation}
        />
        <Content style={styles.profileBox} contentContainerStyle={{ flex: 1 }}>
          <View
            style={styles.topArea}
          >
            <ImageBackground
              style={styles.headerBackgroundImage}
              blurRadius={10}
              source={{
                uri: "https://www.planwallpaper.com/static/images/c42ac6a0c2aaee69c79955d1d32c54b4_large.jpeg",
              }}
            >
              <View
                style={styles.profileImageArea}
              >
                <Image
                  style={styles.userImage}
                  source={{
                    uri: "https://images6.alphacoders.com/608/608163.png",
                  }}
                />

                <View style={styles.profileInfo}>
                  <Text style={styles.userNameText}>{this.state.fullname}</Text>
                  <View style={styles.userAddressRow}>
                    <View style={styles.profileHeader}>
                      <Text style={styles.userCityText}>
                        <Entypo
                          name="location-pin"
                        />
                        {this.state.state}, USA
                </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View  style={styles.bottomArea}>
          <Tabs >
              <Tab heading={<TabHeading><Text>Listings</Text></TabHeading>}>
                <Listings/>
              </Tab>
              <Tab heading={<TabHeading><Text> 0 Followers</Text></TabHeading>}>
                <Followers/>
              </Tab>
              <Tab heading={<TabHeading><Text>0 Following</Text></TabHeading>}>
                <Following/>
              </Tab>
            </Tabs>
          </View>

        </Content>
        <AppFooter
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}
