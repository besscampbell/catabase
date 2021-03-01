import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CatControl from './components/CatControl';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Catabase</Text>
      {/* <Header /> */}
      <CatControl />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


///
