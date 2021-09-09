import React, { Component } from 'react';
import { data } from '../data';
import { Container } from './style';

export default class index extends Component {
  render() {
    return (
      <Container>
        {data.map((value) => {
          return <div>{value.name}</div>;
        })}
      </Container>
    );
  }
}
