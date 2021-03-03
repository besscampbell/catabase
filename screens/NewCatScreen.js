import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { addCat } from '../actions/index';
import { TextInput } from 'react-native-gesture-handler';

class NewCatScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
          This is where we will Add a Cat 🙀
          </Text>
          
        <Button
          title="Back to Home"
          color="#841584"
          onPress={() =>
          this.props.navigation.navigate('Catabase')}
        />
      </View>
    );
  }
}

// NewCatScreen.contextType = CatsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "baseline"
  }
});

const mapStateToProps = (state) => {
  const { cats } = state
  return { cats }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addCat,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewCatScreen);