/**
 * Created by niutf on 16/2/3.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


class BasicScreen extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        {this.props.content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
});

module.exports = BasicScreen;