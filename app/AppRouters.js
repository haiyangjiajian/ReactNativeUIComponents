/**
 * Created by vincent on 16/8/22.
 */
import React from 'react';
import HomeScreen from './component/HomeScreen'
import PickerExampleScreen from './component/PickerExampleScreen'
import WebViewScreen from './uiComponents/WebViewScreen'

const AppRouters = {

  home: {
    name: 'home',
    title: '主页',
    component: HomeScreen
  },

  pickerExample: {
    name: 'pickerExample',
    title: 'pickerExample',
    component: PickerExampleScreen
  },

  webView: {
    name: 'webView',
    title: '',
    component: WebViewScreen,
    params: {
      url: '',
    }
  },
  

  getComponent(route, navigator) {
    let Component = AppRouters[route.name].component;
    if (!Component) {
      Component = route.component;
    }
    return (
      <Component {...route.params} navigator={navigator}/>
    );
  }
};

export default AppRouters;