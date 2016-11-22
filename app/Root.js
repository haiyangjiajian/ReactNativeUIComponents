
'use strict';

import React from 'react';
import {
  Navigator,
  View,
} from 'react-native';
import codePush from "react-native-code-push";


import Router from './Router';

class Root extends React.Component {

  render() {
    let initialRoute = {name: 'home', title: '主页', navBarHidden: false};
    return (<Router initialRoute={initialRoute}/>);
  }

}

Root = codePush(Root);

export default Root;