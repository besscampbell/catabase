import React from 'react';
import Cat from './Cat';
import * as firebase from 'firebase';
import "firebase/firestore";



function CatList(){
  const db = firebase.firestore();
  const cats = db.collection("cats")
  return(
    <View style={styles.cats}>
      {cats.map((cat) => {
        return <Cat
        catName= {cat.name}
        catColoring= {cat.coloring}
        />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cats: {
    textAlign: 'center',
    color: 'red'
  }
})

export default CatList