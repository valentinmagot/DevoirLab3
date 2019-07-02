import React from 'react';
import home from './Views/Home'
import restaurant from './Views/Restaurant'
import menu from './Views/Menu'
import confirm from './Views/Confirm'

import {createStackNavigator, createAppContainer} from 'react-navigation';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Home: {
    screen: home,
    navigationOptions: {
      title: 'Home',
      header: null //this will hide the header
    },
  },
  Restaurant: {
    screen: restaurant,
    navigationOptions: {
      title: 'Restaurant',
      headerTintColor: 'black',
      headerStyle: {
         backgroundColor: '#F7B277'
      }
    }
  },
  Menu: {
    screen: menu,
    navigationOptions: {
      title: 'Menu',
      headerTintColor: 'black',
      headerStyle: {
         backgroundColor: '#F7B277'
      }
    }
  },
  Confirm: {
    screen: confirm,
    navigationOptions: {
      title: 'Confirm Order',
      headerTintColor: 'black',
      headerStyle: {
         backgroundColor: '#F7B277'
      }
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;
