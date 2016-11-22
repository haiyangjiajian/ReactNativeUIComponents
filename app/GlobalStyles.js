import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

import GlobalDimensions from "./GlobalDimensions"

let deviceHeight = Dimensions.get('window').height;

const GlobalStyles = StyleSheet.create({

  container: {
    marginTop: GlobalDimensions.navbarHeight,    //equal the height of navBar
    height: deviceHeight - GlobalDimensions.navbarHeight,
    backgroundColor: "#efefef",
  },
  
  navigator: {
    flex: 1
  },

  navBar: {
    height: GlobalDimensions.navbarHeight,
    backgroundColor: '#292f35',
  },

  divider: {
    height: 1,
    backgroundColor: '#f3f3f3',
    marginTop: 4,
  },
});

export default GlobalStyles;

