import React, { Component } from 'react';
import { Container, Title } from './style';

export default class index extends Component {
  render() {
    return (
      <div>
        <Container>
          <input type='text' />
          <Title>Cinemas</Title>
        </Container>
      </div>
    );
  }
}
