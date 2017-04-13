import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';


const Throwaway = styled.p`
  text-align: center;
  font-size: 32px;
  color: #2A9BD6;
`;

export default class Apod extends Component {
  render() {
    return <Throwaway>Build me!</Throwaway>;
  }
}