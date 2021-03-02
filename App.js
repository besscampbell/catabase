import React from 'react';
import NewCatScreen from './screens/NewCatScreen';
import HomeScreen from './screens/HomeScreen';
import catsReducer from './reducers/CatsReducer';
import Form from './components/Form';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { CatsContext } from './screens/CatsContext';

const store = createStore(catsReducer);
const Stack = createStackNavigator();

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     possibleCats: [
  //       'Bobott',
  //       'Zahara',
  //       'Mister Meowmers'
  //     ],
  //     currentCats: [],
  //   }
  // }

  // addCat = (index) => {
  //   const {
  //     currentCats,
  //     possibleCats,
  //   } = this.state

  //   const addedCat = possibleCats.splice(index, 1)
  //   currentCats.push(addedCat)
  //   this.setState({
  //     currentCats,
  //     possibleCats,
  //   })
  // }

  render(){
    return (
      <Provider 
        store={store}
      >
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
              component={NewCatScreen}
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
              component={Form}
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
      </Provider>
    );
  }
}

export default App;