'use strict';
import {
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';

import NavigationButton from './NavigationButton'
import NavigationTitle from './NavigationTitle'
import React, {Component} from 'react';

var NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    return (<NavigationButton route={route} navigator={navigator} direction="left"/>)
  },

  RightButton: function (route, navigator, index, navState) {
    return (<NavigationButton route={route} navigator={navigator} direction="right"/>);
  },

  Title: function (route, navigator, index, navState) {
    return (<NavigationTitle route={route}/>);
  },
};

module.exports = NavigationBarRouteMapper;