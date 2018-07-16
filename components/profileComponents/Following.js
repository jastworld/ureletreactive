import React, { Component } from 'react';
import { List,Content } from 'native-base';
import user from '../models/UserListItem';



export default class Following extends Component {
  followingList = ()=>{
    let obj = []
    for(i=0;i<100;i++){
      if(i%2===0)
        obj.push(user.userListItem(i,"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C","Jessica Hsu"))
      else
        obj.push(user.userListItem(i,"https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg","Barack Obama"))
    }
    return obj
  }
  render() {
    return (
      <Content>
        <List>
          {this.followingList()}
        </List>
        </Content>
    );
  }
}
