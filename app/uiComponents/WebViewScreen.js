/**
 * Created by ZhaoHaiyang on 16/9/14.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
} from 'react-native';
import GlobalStyles from '../GlobalStyles'

export default class H5WebViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      status: '加载中',
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri:this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          javaScriptEnabledAndroid={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }

  onShouldStartLoadWithRequest(event:Event) {
    // Implement any custom loading logic here, don't forget to return! only for ios
    return true;
  }

  onNavigationStateChange() {
    
  }
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  },
});