
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
} from 'react-native';

import GlobalStyles from '../GlobalStyles'
import AppRouters from '../AppRouters'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={GlobalStyles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress('picker')}>
          <Text style={styles.text}>component1: picker</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onPress(label) {
    if (label === 'picker') {
      this.props.navigator.push(AppRouters.pickerExample)
    }
  }
}

const styles = StyleSheet.create({
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
