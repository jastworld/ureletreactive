import React, { Component } from 'react';
import { Content, Thumbnail, Body, Left, Right, ActionSheet, Card, CardItem, Text, Button } from 'native-base';
import { Image, View, StyleSheet } from 'react-native';
import icon, { width, height } from '../images/icon.jpeg';
import productCard from '../models/ProductCard';

const friends = [
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11009 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11009 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 11 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 14 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 131 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 1341 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: 141 },
  {id:1, itemName: 'Apple',name:"Tayo Joseph", school: "Stony Brook University", icon, description: " You must install peer dependencies yourself", price: "yaaass" },

];

export default class Product extends Component {
  
  myList = ()=>{
    let obj = []
    return friends.map(function(product, i){
      return (
        productCard.productCard(i,product.itemName,product.name, product.school, icon, product.description, product.price)
      );
    });
  }
  render() {
    return (
      <Content>
        {this.myList()}
      </Content>
    );
  }
}
