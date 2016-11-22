'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Alert,
} from 'react-native';


export default class NavigationButton extends React.Component {
  _makeButton (item, style, callback) {
    let styleType;
    let text;
    let button;

    styleType = styles.navBarText;
    text = item.label;
    button = (
      <View style={style}>
        <Text
          style={[styleType, styles.navBarButtonText, styles[text + 'NavBar'], item.disabled && styles.disabledText]}>
          {text}
        </Text>
      </View>
    );
    if (item.disabled) {
      return button;
    }
    else {
      return (
        <TouchableOpacity onPress={callback}>
          {button}
        </TouchableOpacity>
      );
    }
  }

  _goBack(navigator) {
    navigator.pop();
  }

  _renderLeft() {
    var backLabel = {label: '返回'};
    return this._makeButton(backLabel, styles.navBarLeftButton, () => this._goBack(this.props.navigator));
  }

  _renderRight() {
    return null
  }

  render() {
    switch (this.props.direction) {
      case 'left':
        return this._renderLeft();
      case 'right':
        return this._renderRight();
      default:
        console.warn("Unknown direction: " + this.props.direction);
    }
  }
}

var styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
  },
  navBarIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  navBarLeftButton: {
    paddingTop: 14,
    paddingLeft: 8,
    justifyContent: 'center',
    paddingBottom: 14
  },
  navBarRightLabel: {
    paddingTop: 14,
    paddingRight: 8,
    justifyContent: 'center',
    paddingBottom: 14
  },
  navBarRightIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 64,
    paddingTop: 14,
    paddingRight: 8,
    paddingBottom: 14
  },
  navBarButtonText: {
    color: 'white',
  },
});

if (Platform.OS === 'ios') {
  styles = StyleSheet.create({
    navBarText: {
      fontSize: 16,
      marginVertical: 8,
    },
    navBarIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      marginVertical: 8,
    },
    navBarLeftButton: {
      paddingLeft: 8,
      paddingTop: 4,
    },
    navBarRightLabel: {
      paddingRight: 8,
      paddingTop: 4,
    },
    navBarRightIcon: {
      paddingRight: 8,
    },
    navBarButtonText: {
      color: 'white',
    },
  });
}
