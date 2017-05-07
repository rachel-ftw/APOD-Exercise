import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form'
import {SpaceCard, FlexContainer} from './SpaceCard'

class Apod extends Component {
  state = {
    starData: '',
    imgWidth: 300
  }
  
  displayData = (starData, imgWidth) => {
    if (!starData.copyright) {
      starData.copyright = "Public Domain"
    }
    this.setState({starData, imgWidth})
  }

  render() {
    return (
      <FlexContainer>
        <Form onSubmit={this.displayData} />
        <SpaceCard
          imgWidth={this.state.imgWidth}
          imgUrl={this.state.starData.url}
          imgUrlHD={this.state.starData.hdurl}
          title={this.state.starData.title}
          explanation={this.state.starData.explanation}
          copyright={this.state.starData.copyright}
          mediaType={this.state.starData.media_type}
        />
      </FlexContainer>
    )
  }
}

export {Apod}
