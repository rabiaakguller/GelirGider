import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen1 from '../Components/HomeScreen1';

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
    headerMode: 'none',
};

const AppStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                 headerShown: false,
          }}>
            <Stack.Screen name='Home' component={HomeScreen1} />
        </Stack.Navigator>
    );
}

export default AppStack;
