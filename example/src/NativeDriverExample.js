/* @flow */

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerExperimental,
} from 'react-native-tab-view';
import SimplePage from './SimplePage';

import type { NavigationState } from 'react-native-tab-view/types';

type Route = {
  key: string,
  title: string,
};

type State = NavigationState<Route>;

export default class NativeDriverExample extends PureComponent<*, State> {
  static title = 'With native animations';
  static appbarElevation = 0;

  state: State = {
    index: 1,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third' },
    ],
  };

  _handleIndexChange = index => {
    this.setState({
      index,
    });
  };

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <SimplePage
            state={this.state}
            style={{ backgroundColor: '#ff4081' }}
          />
        );
      case '2':
        return (
          <SimplePage
            state={this.state}
            style={{ backgroundColor: '#673ab7' }}
          />
        );
      case '3':
        return (
          <SimplePage
            state={this.state}
            style={{ backgroundColor: '#4caf50' }}
          />
        );
      case '4':
        return (
          <SimplePage
            state={this.state}
            style={{ backgroundColor: '#2196f3' }}
          />
        );
      default:
        return null;
    }
  };

  _renderPager = props => <TabViewPagerExperimental {...props} />;

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        renderPager={this._renderPager}
        onIndexChange={this._handleIndexChange}
        useNativeDriver
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});
