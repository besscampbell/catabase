import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

function Cat(props){
  return (
    <View>
      <Text>{props.catName}</Text>
      <Text>{props.catColoring}</Text>
    </View>
  );
}

Cat.propTypes = {
  catName: PropTypes.string,
  catColoring: PropTypes.string
}

export default Cat;