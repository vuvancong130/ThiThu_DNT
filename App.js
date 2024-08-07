import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import HomeScreen from './src/Screens/HomeScreen';
import AddXeMayScreen from './src/Screens/AddXeMayScreen';
import EditXeMayScreen from './src/Screens/EditXeMayScreen';
import store from './src/Store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddXeMay" component={AddXeMayScreen} />
          <Stack.Screen name="EditXeMay" component={EditXeMayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
