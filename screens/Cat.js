import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';

function Cat(props){
  return (
    <View style={styles.cat}>
      <Text style={styles.text}>😻 Name: {props.catName} 😺 Coloring: {props.catColoring}{"\n"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cat: {
    flex: 1,
    backgroundColor: '#FCE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 100,
    fontFamily: 'serif',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
});

Cat.propTypes = {
  catName: PropTypes.string,
  catColoring: PropTypes.string,
  id: PropTypes.string,
}

export default Cat;