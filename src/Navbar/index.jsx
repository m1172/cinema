import React, { Component } from 'react';
import data from '../data';

export default class index extends Component {
  render() {
    return (
      <div>
        {data.map((value) => {
          return <div>{value.name}</div>;
        })}
      </div>
    );
  }
}
