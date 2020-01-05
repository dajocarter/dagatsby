import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

const UnitContainer = styled.div`
  position: relative;
  height: 500px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  height: 500px;
  background: rgba(0, 0, 0, 0.3);
`;

const HeroImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 500px;

  & > img {
    object-fit: cover !important; // or whatever
    object-position: 50% 50% !important; // or whatever
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
  }
`;

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
  z-index: 20;
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

const Blurb = styled.p`
  margin: 0;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
`;

const HeroUnit = props => {
  return (
    <UnitContainer>
      <Overlay />
      {props.fluid ? (
        <HeroImg fluid={props.fluid} alt={props.alt} />
      ) : (
        <HeroImg fixed={props.fixed} alt={props.alt} />
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
  fluid: (props, propName, componentName) => {
    if (!props.fluid && !props.fixed) {
      return new Error(
        `One of props 'fluid' or 'fixed' was not specified in '${componentName}'.`
      );
    }
  },
  fixed: (props, propName, componentName) => {
    if (!props.fixed && !props.fluid) {
      return new Error(
        `One of props 'fixed' or 'fluid' was not specified in '${componentName}'.`
      );
    }
  },
  alt: PropTypes.string,
  headline: PropTypes.string,
  blurb: PropTypes.string
};

export default HeroUnit;
