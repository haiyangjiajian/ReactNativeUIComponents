import React, {Component} from 'react';
import {
  Navigator,
  View,
  BackAndroid,
  Platform,
  Alert,
} from 'react-native';

import GlobalStyles from './GlobalStyles'
import NavigationBar from './navigation/NavigationBar'
import NavigationBarRouteMapper from './navigation/NavigationBarRouteMapper'
import AppRouters from './AppRouters'
import BasicScreen from './component/BasicScreen'

export default class Router extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navBarHidden: false
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }

  onBackAndroid() {
    const nav = this.navigator;
    if (!nav)
      return false;
    const routers = nav.getCurrentRoutes();
    const top = routers[routers.length - 1];

    // TODO 现在还没有自行处理component的back按键的需求
    //if (top.ignoreBack || (top.component && top.component.ignoreBack)){
    //  // 路由或组件上决定这个界面忽略back键
    //  return true;
    //}
    //const handleBack = top.handleBack || (top.component && top.component.handleBack);
    //if (handleBack) {z
    //  // 路由或组件上决定这个界面自行处理back键
    //  return handleBack();
    //}

    if (routers.length > 1) {
      nav.pop();
      return true;
    } else {
      if (this.lastBackPressed && ((this.lastBackPressed + 2000) >= Date.now())) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      Alert.alert('', '再按一次退出应用');
      return true;
    }
    return true;
  }

  static renderPage(route, navigator) {
    let child = AppRouters.getComponent(route, navigator);
    return (
      <BasicScreen content={child} route={route}/>
    )
  }

  static configureScene(route, routeStack) {
    if (route.type === 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  render() {
    return (
      <Navigator ref={(nav) => {this.navigator = nav;}}
                 style={GlobalStyles.navigator}
                 initialRoute={this.props.initialRoute}
                 renderScene={(route, navigator) => Router.renderPage(route, navigator)}
                 configureScene={Router.configureScene}
                 onWillFocus={(route) => {this.setState({navBarHidden: route && route.navBarHidden ? route.navBarHidden : false});}}
                 navigationBar={this.renderNavBar()}
      />);
  }

  renderNavBar() {
    return !this.state.navBarHidden ? (
      <NavigationBar routeMapper={NavigationBarRouteMapper}
                     style={GlobalStyles.navBar}
      />
    ) : null;
  }
}

