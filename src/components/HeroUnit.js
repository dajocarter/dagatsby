import React from "react";
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
  margin-top: 0;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
`;

const Hr = styled.hr`
  background: #fff;
  height: 2px;
  width: 69%;
  max-width: 500px;
  min-width: 250px;
  margin-bottom: 0.725rem;
  box-shadow: 1px 1px 1px #000;
`;

const Blurb = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: 1px 1px 1px #000;
  color: #fff;
`;

const HeroUnit = props => {
  return (
    <UnitContainer>
      <HeroImg sizes={props.img} />
      <HeroContent>
        <Headline>{props.headline}</Headline>
        <Hr />
        <Blurb>{props.blurb}</Blurb>
      </HeroContent>
    </UnitContainer>
  );
};

export default HeroUnit;
