import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
  margin: 20px;
  font-family: 'Space Mono', monospace;
`;

const Copyright = styled.p`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 40px;
  line-height: 2em;
  letter-spacing: 1px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin:
`;

const CardContainer = styled(FlexContainer)`
  max-width: 800px;
  margin: 20px;
  background: rgba(35, 89, 99, .8)
  padding: 30px;
  color: #ddd;
`;

const APODimg = (props) => {
  return <img
      style={{maxWidth:`${props.imgWidth}px`}}
      src={props.imgWidth >= 1000 ? props.imgUrlHD : props.imgUrl}
    />
}

const APODvideo = (props) => {
  return <iframe
    src={props.url}
    width="560"
    height="315"
    frameborder="0"
    allowfullscreen>
  </iframe>
}


const SpaceCard = (props) => {
  return (
    <CardContainer>
      {props.mediaType === "video" ? (
          <APODvideo url={props.imgUrl} />
        ) : (
          <APODimg imgWidth={props.imgWidth} imgUrlHD={props.imgUrlHd} imgUrl={props.imgUrl} />
        )
      }
      <div>
        <Title>{props.title}</Title>
        <Copyright>{props.copyright}</Copyright>
        <Description>{props.explanation}</Description>
      </div>
    </CardContainer>
  )
}

export {SpaceCard, FlexContainer}
