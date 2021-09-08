import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
}
