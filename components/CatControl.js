import React, {Component } from 'react';
import {View, Text} from 'react-native';

class CatControl extends Component {
  render() {
    return (
      <View style={{
        flex:1, 
        alignItems:'center',
        justifyContent:'center'
      }}> 
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

export default CatControl;