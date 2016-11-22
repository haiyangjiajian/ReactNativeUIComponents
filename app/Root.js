
'use strict';

import React from 'react';
import {
  Navigator,
  View,
} from 'react-native';


import Router from './Router';

export default class Root extends React.Component {

  render() {
    let initialRoute = {name: 'home', title: '主页', navBarHidden: false};
    return (<Router initialRoute={initialRoute}/>);
  }

}
