/*import * as React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux';
import store from './src/store';

import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Gelir Gider',
            }} />
          <Stack.Screen 
            name="Add" 
            component={AddTransaction} 
            options={{
              title: 'Gider Ekle',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;*/
/*

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/Components/OnboardingScreen';
import LoginScreen from './src/Components/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {useEffect} from "react";

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLauch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLauch(true);
      } else {
        setIsFirstLauch(false);
      }
    });
  }, []);

  if(isFirstLaunch == null) {
    return null;
  } else if( isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
        headerMode="none"
        >
          <AppStack.Screen name ="Onboarding" component={OnboardingScreen}/>
          <AppStack.Screen name ="LoginScreen" component={LoginScreen}/>
        </AppStack.Navigator>
      </NavigationContainer>

    );
  } else {
    return <LoginScreen/>
  }
}

export default App;*/


import React from 'react';
import Providers from './src/navigation';

const App = () => {
  return <Providers />;
}

export default App;