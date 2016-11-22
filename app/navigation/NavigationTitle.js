'use strict'
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';

export default class NavigationTitle extends React.Component {

  render() {
    var title = this.props.route.title;
    return (
      <View style={styles.container}>
        <Text style={styles.navBarTitleText}>{title}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',//可用
    marginTop: 4,
    marginLeft: -64,
    alignSelf: 'center',
  },
  navBarTitleText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});

if (Platform.OS === 'ios') {
  styles = StyleSheet.create({
    navBarTitleText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 20,
      marginVertical: 9,
    },
  });
}


