/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Homepage from './src/components/Homepage/Homepage.js';
import Styles from './src/components/Test/StylesComponents/Styles.js';
import SpacedStyles from './src/components/Test/StylesComponents/SpacedStyles.js';

export default class reactTutorialApp extends Component {
  render() {
    return (
        <SpacedStyles/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
