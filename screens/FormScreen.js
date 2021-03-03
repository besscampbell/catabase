import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useFirestore } from 'react-redux-firebase';

function FormScreen({navigation}, props){
  const {control, handleSubmit, errors } = useForm();
  const catNameInputRef = React.useRef();
  const catColoringInputRef = React.useRef();
  const firestore = useFirestore();
  const onSubmit = (data)=> {
    return firestore.collection('cats').add({
      catName: data.catName,
      catColoring: data.catColoring
    })
  };
  const onError = (errors) => {
    console.log(errors)
  };
  const functionOne = handleSubmit(onSubmit, onError);

  const functionTwo = () =>{
    navigation.navigate('Cat List');
  }
  const mixFunction = () =>{
    functionOne();
    functionTwo();
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Cat's Name</Text>
        <Controller
          name="catName"
          defaultValue=""
          control={control}
          rules={{required: 'This is required'}}
          onFocus={() => {
            catNameInputRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              ref={catNameInputRef}
              onChangeText={(value) => {
                props.onChange(value);
              }}
            />
          )}
        />
      </View>
      <View>
        <Text style={styles.text}>Coloring</Text>
        <Controller
          name="catColoring"
          defaultValue=""
          control={control}
          rules={{required: 'This is required'}}
          onFocus={() => {
            catColoringInputRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              {...props}
              style={styles.input}
              ref={catColoringInputRef}
              onChangeText={(value) => {
                props.onChange(value);
              }}
            />
          )}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="+Cat"
          color="white"
          style={styles.buttonText}
          // onPress={handleSubmit(onSubmit, onError),
          //   () =>navigation.navigate('Cat List')
          // }
          onPress={() => {mixFunction()}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    marginTop: 40,
    backgroundColor: '#ec5990',
    height: 40,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  }
});

export default FormScreen;
