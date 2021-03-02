import React, {Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';
// import { CatsContext } from './CatsContext';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text>
          You have {this.props.cats.current.length } 😿 cats.
        </Text>
        <Button
          title="Add some cats"
          onPress={() =>
            this.props.navigation.navigate('New Cat')}/>
      </View>
    );
  }
}
// HomeScreen.contextType = CatsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
}
export default connect(mapStateToProps)(HomeScreen);