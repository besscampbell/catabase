import React from 'react';
import PropTypes from 'prop-types';

function Cat(props){
  return (
    <View>
      <Text>{props.catName}</Text>
    </View>
  );
}

Cat.propTypes = {
  catName: PropTypes.string,
  catColoring: PropTypes.string
}

export default Cat;