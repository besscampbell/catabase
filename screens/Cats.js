import React from 'react';
import Cat from './Cat';
import { StyleSheet } from 'react-native';
import {View, Text} from 'react-native';
// import * as firebase from 'firebase';
// import "firebase/firestore";



function Cats(){
  // const db = firebase.firestore();
  // const cats = db.collection("cats")
  return(
    <View style={styles.cats}>
      {/* {cats.map((cat) => {
        return <Cat
        catName= {cat.name}
        catColoring= {cat.coloring}
        />
      })} */}
      <Text>Bobott, Zahara, Mister Meowmers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cats: {
    textAlign: 'center',
    color: 'red'
  }
})

export default Cats;