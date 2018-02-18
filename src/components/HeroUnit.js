import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

const UnitContainer = styled.div`
  position: relative;
`;

const HeroImg = styled(Img)``;

const HeroContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Headline = styled.h1`
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
`;

const Hr = styled.hr`
  background: #fff;
  height: 2px;
  width: 69%;
  max-width: 500px;
  min-width: 250px;
  margin: 0.725rem 0;
  box-shadow: 1px 1px 1px #000;
`;

const Blurb = styled.h2`
  margin: 0;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
`;

const HeroUnit = props => {
  return (
    <UnitContainer>
      {props.sizes ? (
        <HeroImg sizes={props.sizes} alt={props.alt} />
      ) : (
        <HeroImg resolutions={props.resolutions} alt={props.alt} />
      )}
      {(props.headline || props.blurb) && (
        <HeroContent>
          {props.headline && <Headline>{props.headline}</Headline>}
          {props.headline && props.blurb && <Hr />}
          {props.blurb && <Blurb>{props.blurb}</Blurb>}
        </HeroContent>
      )}
    </UnitContainer>
  );
};

HeroUnit.propTypes = {
  sizes: (props, propName, componentName) => {
    if (!props.sizes && !props.resolutions) {
      return new Error(
        `One of props 'sizes' or 'resolutions' was not specified in '${componentName}'.`
      );
    }
  },
  resolutions: (props, propName, componentName) => {
    if (!props.resolutions && !props.sizes) {
      return new Error(
        `One of props 'resolutions' or 'sizes' was not specified in '${componentName}'.`
      );
    }
  },
  alt: PropTypes.string,
  headline: PropTypes.string,
  blurb: PropTypes.string
};

export default HeroUnit;
