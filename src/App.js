import React, { Component } from 'react';
import Navbar from './Navbar/index.jsx';
import Body from './Body';

export default class App extends Component {
  render() {
    return (
      <div>
        <Body />
        <Navbar />
      </div>
    );
  }
}
