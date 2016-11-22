
'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Modal
} from 'react-native'

import Root from './app/Root'

class StdMobile extends Component {

  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeUIComponents', () => StdMobile);
