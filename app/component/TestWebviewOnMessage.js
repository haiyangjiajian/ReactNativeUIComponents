import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Alert,
  TouchableOpacity,

} from 'react-native';
import GlobalStyles from '../GlobalStyles'
export default class TestWebviewOnMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      status: '加载中',
    }
  }

  webview = null;

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <View style={GlobalStyles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('onMessage')}>
          <Text style={styles.text}>from rn to html</Text>
        </TouchableOpacity>
        <WebView
          ref={webview => { this.webview = webview; }}
          automaticallyAdjustContentInsets={true}
          source={require('./testOnMessage.html')}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          javaScriptEnabledAndroid={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
          startInLoadingState={true}
          scalesPageToFit={true}
          onMessage={(e) => this.onMessage(e)}
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

  onMessage(e) {
    Alert.alert('1', JSON.stringify(e.nativeEvent.data));
  }

  onPress() {
    if (this.webview) {
      Alert.alert('1', 'webview');

      this.webview.postMessage('"Hello" from React Native!');
    }
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
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 26
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
});
