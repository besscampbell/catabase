import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';


export default function Form(){
  const {control, register, handleSubmit, setValue, errors } = useForm();
  const catNameInputRef = React.useRef();
  const catColoringInputRef = React.useRef();
  const onSubmit = data=> {
    console.log(data);
  };
  console.log('errors', errors)

  // useEffect(() => {
  //   register("catName");
  //   register("catColoring");
  // }, [register]);

  // renderCount++;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Cat's Name</Text>
        <Controller 
          name="catName" 
          control={control}
          rules={{required: 'This is required'}}
          onFocus={() => {}}
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
          control={control} 
          rules={{required: 'This is required'}}
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

      {/* <Text styles={styles.text}>Render Counter: {renderCount}</Text> */}
      <View style={styles.button}>
        <Button
          title="+Cat"
          color="white"
          style={styles.buttonText}
          onPress={handleSubmit(onSubmit)}
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

