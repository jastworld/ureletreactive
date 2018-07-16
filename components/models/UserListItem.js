import React, { Component } from 'react';
import { ListItem, Thumbnail, Body, Left, Right, ActionSheet, Text } from 'native-base';
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
      margin: 10
    }
});
var BUTTONS = ["Unfollow", "Cancel"];
var UNFOLLOW_INDEX = 0;
var CANCEL_INDEX = 1;
exports.userListItem = (index,userImage, userName) => (
    <ListItem avatar key={index}>
        <Left>
            <Thumbnail square source={{ uri: userImage }} />
        </Left>
        <Body>
            <Text style={styles.item}>{userName}</Text>
        </Body>
        <Right>
            <Text 
            style={styles.item} 
            onPress={() => (
                ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      //destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: "Do you really want to unfollow "+userName
                    },
                    buttonIndex => {
                      if (buttonIndex === UNFOLLOW_INDEX) {
                        alert("UNFOLLOW");
                      } else if (buttonIndex === CANCEL_INDEX) {
                        alert("CANCEL")
                      }
                    }
                  )
            )}
            >
            Unfollow</Text>
        </Right>
    </ListItem>
);