import React from 'react';
import Cats from './screens/Cats';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import catsReducer from './reducers/CatsReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import '@react-native-firebase/auth';

function App() {

  const store = createStore(catsReducer);
  const Stack = createStackNavigator();
  const rrfProps = {
    firebase: firebase,
    config: {
      userProfile: "users",
      // useFirestoreForProfile: true,
    },
    dispatch: store.dispatch,
    createFirestoreInstance: createFirestoreInstance,
  }

  store.subscribe(() => console.log(store.getState()));

  return (
    <Provider
      store={store}
    >
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Catabase"
              component={HomeScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#FCE',
                },
                headerTintColor: '#604',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Cat List"
              component={Cats}
              options={{
                headerStyle: {
                  backgroundColor: '#FCE',
                },
                headerTintColor: '#604',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
              <Stack.Screen
              name="New Cat"
              component={FormScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#FCE',
                },
                headerTintColor: '#604',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReactReduxFirebaseProvider>
    </Provider>
  );

}

export default App;