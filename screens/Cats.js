import React from 'react';
import Cat from './Cat';
import { StyleSheet } from 'react-native';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function Cats(){

  useFirestoreConnect([
    {collection: 'cats'}
  ]);

  const cats = useSelector(state=> state.firestore.ordered.cats);
  console.log(cats);

  if(isLoaded(cats)){
    return(
      <View style={styles.cats}>
        <Text style={styles.cats}>
          {"\n"}
          {cats.map((cat) => {
            return <Cat
              catName={cat.catName}
              catColoring={cat.catColoring}
              id={cat.id}
              key={cat.id} />
          })}
        </Text>
        {/* view not working on mobile */}
      </View>
    );
  } else {
    return (
      <View style={styles.cat}>
        <Text>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cat: {
    flex: 1,
    backgroundColor: '#FCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Cats;