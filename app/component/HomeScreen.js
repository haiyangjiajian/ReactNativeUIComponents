
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Alert,
  View,
  Dimensions,
  ViewPagerAndroid,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';

import GlobalStyles from '../GlobalStyles'
import AppRouters from '../AppRouters'

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={GlobalStyles.container} refreshControl={
                <RefreshControl onRefresh={() => {}} refreshing={false} enabled={true}/> }>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('picker')}>
          <Text style={styles.text}>component1: picker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('onMessage')}>
          <Text style={styles.text}>component2: testWebviewOnMessage</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  onPress(label) {
    if (label === 'picker') {
      this.props.navigator.push(AppRouters.pickerExample)
    } else if (label === 'onMessage') {
      this.props.navigator.push(AppRouters.testWebviewOnMessage)
    }
    
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 26,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
});
