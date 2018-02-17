import React from "react";
import styled from "styled-components";
import Anchor from "./styled/Anchor";
import Img from "gatsby-image";

const Item = styled.div`
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ItemImg = styled(Img)`
  flex: 0 0 auto;
  @media (max-width: 767px) {
    width: 50%;
  }
`;

const ItemContent = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 350px);
  padding-left: 1rem;
  @media (max-width: 767px) {
    padding-left: 0;
    width: 50%;
  }
`;

const ItemTitle = styled.h2`
  margin-top: 0;
`;

const ItemDate = styled.p`
  font-size: 0.75rem;
`;

const ItemLink = styled(Anchor)`
  color: #fe7f2d;
  &:hover {
    color: #e71d36;
  }
`;

const ItemExcerpt = styled.div``;

const ListItem = props => {
  return (
    <Item>
      <ItemImg
        resolutions={props.node.frontmatter.image.childImageSharp.resolutions}
      />
      <ItemContent>
        <ItemTitle>
          <ItemLink to={`/posts/${props.node.frontmatter.slug}/`}>
            {props.node.frontmatter.title}
          </ItemLink>
        </ItemTitle>
        <ItemDate>{props.node.frontmatter.date}</ItemDate>
        <ItemExcerpt dangerouslySetInnerHTML={{ __html: props.node.excerpt }} />
      </ItemContent>
    </Item>
  );
};

export default ListItem;
