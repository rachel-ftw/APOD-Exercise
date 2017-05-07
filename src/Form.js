import 'whatwg-fetch';
import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.25em;
  padding: 0.5em 2em;
  margin: 0.5em 0.5em 0.5em 0;
  color: #9AD7DA;
  background: #990922;
  border: none;
  border-radius: 0 3px 3px 0;
  font-family: 'Space Mono', monospace;

  &:hover {
    background: #f33859;
  }
`;

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em 0 0.5em 0.5em;
  color: #990922;
  background: #9AD7DA;
  border: none;
  border-radius: 3px 0 0 3px;
  font-family: 'Space Mono', monospace;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default class Form extends Component {
  state = { imgWidth: '' }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`https://api.nasa.gov/planetary/apod?api_key=AsUuRSeEYFvXeOe5KrpmJ9Is1wi0lQ2X0Kpr3ZTD`)
      .then(response => response.json())
      .then(APODdata => {
        console.log(APODdata)
        this.props.onSubmit(APODdata, this.state.imgWidth)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.imgWidth}
          onChange={(event) => this.setState({imgWidth: event.target.value})}
          placeholder="image width in px" />
        <Button type="submit">{`today's APOD`}</Button>
      </form>
    )
  }
}
