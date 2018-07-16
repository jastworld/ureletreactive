import React, { Component } from 'react';
import { Content, Thumbnail, Body, Left, Right, ActionSheet, Card, CardItem, Text, Button } from 'native-base';
import { Image, View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';

const styles = StyleSheet.create({
    productInfo: {
      //backgroundColor: "red",
      flex: 1,
      //alignSelf: 'stretch',
      flexDirection: 'row'
    },
    price: {
      flex: 1
    },
    productButton: {
      flex: 1,
      margin: 10,
      
    },
    headCard: {
      flexDirection: 'row'
    },
    userImage: {
      flex: 1
    },
    userInfo: {
      flex: 5
    },
    dropArrow: {
      flex: 1
    },
    descriptionStyle:{
      //bold
    },
    itemNameStyle:{
      fontWeight: 'bold'
    }
  
  })
var BUTTONS = ["Update", "Delete", "Cancel"];
var UPDATE_INDEX = 0;
var DELETE_INDEX = 1;
var CANCEL_INDEX = 2;

  
exports.productCard = (index,itemName,displayName, school, icon, description, price) => (
    <Card  key={index}>
      <CardItem style={styles.headCard}>
        <Left style={styles.userImage}>
          <Thumbnail 
            source={{ uri: 'http://www.universalstudioshollywood.com/site-content/uploads/2017/04/despicable-me-minion-mayhem-ride-orlando-minion-f.png' }}
            style={{height: 20}} 
            />
        </Left>
        <Body style={styles.userInfo}>
          <Text>{displayName}</Text>
          <Text note>{school}</Text>
        </Body>
        <Right style={styles.dropArrow}>
          <Feather
            name="chevron-down"
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  //destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Product Actions"
                },
                buttonIndex => {
                  if (buttonIndex === UPDATE_INDEX) {
                    alert("Update Me");
                  } else if (buttonIndex === DELETE_INDEX) {
                    alert("Delete Me")
                  }
                }
              )
            }
          />
        </Right>
      </CardItem>
      <CardItem>
        <Image source={icon} style={{ height: 200, width: null, flex: 1 }} />
      </CardItem>
      <CardItem>
        <Body style={styles.descriptionStyle}>
        <Text style={styles.itemNameStyle} > {itemName}:  </Text> <Text>{description}</Text>
        </Body>
      </CardItem>
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, }}>
        <Left>
          <Text size={30} style={{color: '#808080'}}>${price}</Text>
        </Left>
        <Body>
          <Foundation name='comments' size={30} color = "#808080"/>
        </Body>
        <Right>
          <Foundation name="heart" size={30} color = "#808080"/>
        </Right>
      </View>
    </Card>
  )