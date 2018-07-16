import React, { Component } from 'react';
import { List, Content } from 'native-base';
import user from '../models/UserListItem';
const followers = [
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},
  {userImages: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/10985559_10153120382424772_1511379273358390489_o.jpg?_nc_cat=0&oh=62d8bca95a3823803602867e0afa2d8e&oe=5BD1911C", name: "Jessica Hsu"},

];

export default class Follower extends Component {
  followingList = ()=>{
    return followers.map(function(follower,i){
      return(
        user.userListItem(i,follower.userImages,follower.name)
      )
    })
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
