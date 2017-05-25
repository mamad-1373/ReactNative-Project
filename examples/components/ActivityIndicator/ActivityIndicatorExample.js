/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */

import createReactClass from 'create-react-class';
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import TimerMixin from 'react-timer-mixin';

const ToggleAnimatingActivityIndicator = createReactClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {
      animating: true
    };
  },

  setToggleTimeout() {
    this.setTimeout(() => {
      this.setState({ animating: !this.state.animating });
      this.setToggleTimeout();
    }, 2000);
  },

  componentDidMount() {
    this.setToggleTimeout();
  },

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        hidesWhenStopped={this.props.hidesWhenStopped}
        size="large"
        style={styles.centering}
      />
    );
  }
});

const examples = [
  {
    title: 'Default',
    render() {
      return <ActivityIndicator style={[styles.centering]} />;
    }
  },
  {
    title: 'Custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
      );
    }
  },
  {
    title: 'Large',
    render() {
      return (
        <ActivityIndicator color="white" size="large" style={[styles.centering, styles.gray]} />
      );
    }
  },
  {
    title: 'Large, custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" size="large" />
          <ActivityIndicator color="#aa00aa" size="large" />
          <ActivityIndicator color="#aa3300" size="large" />
          <ActivityIndicator color="#00aa00" size="large" />
        </View>
      );
    }
  },
  {
    title: 'Start/stop',
    render() {
      return (
        <View style={[styles.horizontal, styles.centering]}>
          <ToggleAnimatingActivityIndicator />
          <ToggleAnimatingActivityIndicator hidesWhenStopped={false} />
        </View>
      );
    }
  },
  {
    title: 'Custom size',
    render() {
      return (
        <View style={[styles.horizontal, styles.centering]}>
          <ActivityIndicator size={40} />
          <ActivityIndicator size="large" style={{ marginLeft: 20, transform: [{ scale: 1.5 }] }} />
        </View>
      );
    }
  }
];

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  gray: {
    backgroundColor: '#cccccc'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  }
});

examples.forEach(example => {
  storiesOf('component: ActivityIndicator', module).add(example.title, () => example.render());
});
