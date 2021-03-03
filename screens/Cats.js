import React from 'react';
import Cat from './Cat';
import { StyleSheet } from 'react-native';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
// import firestore from '@react-native-firebase/firestore';
// import * as firebase from 'firebase'
// import firestore from 'firebase/firestore'


function Cats(){

  // firestore()
  //   .collection('cats')
  //   .get()
  //   .then(querySnapshot => {
  //     console.log('Total cats:', querySnapshot.size);

  //     querySnapshot.forEach(documentSnapshot => {
  //       console.log('Cat id:', documentSnapshot.id, documentSnapshot.data())
  //     });
  //   });
  useFirestoreConnect([
    {collection: 'cats'}
  ]);

  const cats = useSelector(state=> state.firestore.ordered.cats);
  console.log(cats);
  // <Text>Add cats here!</Text>
  // {this.context.possibleCats.map((cat, index) => (
  //   <Button
  //     key={cat}
  //     title={`Add ${cat}`}
  //     onPress={() => this.context.addCat(index)}
  //   />
  // ))}
  if(isLoaded(cats)){
    return(
      <View style={styles.cats}>
        <Text >{cats.map((cat) => (

        <Text> {cat.catName}</Text>
        ))}
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }    
}

const styles = StyleSheet.create({
  cats: {
    textAlign: 'center',
    color: 'red'
  }
})

export default Cats;