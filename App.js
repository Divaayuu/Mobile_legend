import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Home} from './screens/Home';
import {Heroes} from './screens/Heroes';
import {setting} from './screens/setting';

const Tab = new TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  setting: {
    screen: setting,
  }
},
{initialRouteName:'Home'},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#000055',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});
