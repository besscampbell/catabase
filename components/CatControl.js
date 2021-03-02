import React, {Component } from 'react';
import {View, Text} from 'react-native';
import NewCat from './NewCat';
import Cats from './Cats';

class CatControl extends Component {
  render() {
    return (
      <View style={{
        flex:1, 
        alignItems:'center',
        justifyContent:'center'
      }}> 
        <Text>
          Hello 😿
        </Text>
        <NewCat />
        <Cats />
      </View>
    );
  }
}

export default CatControl;