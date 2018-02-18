import React from "react";
import styled from "styled-components";
import Anchor from "./styled/Anchor";
import Img from "gatsby-image";
import { Grid, GridCol } from "griz";

const Item = styled(Grid)`
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  & + & {
    margin-top: 0;
    padding-top: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ItemImg = styled(Img)``;

const ItemContent = styled.div`
  @media (min-width: 768px) {
    padding-left: 1rem;
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
    <Item responsiveMd>
      {props.node.frontmatter.image && (
        <GridCol>
          <ItemImg
            resolutions={
              props.node.frontmatter.image.childImageSharp.resolutions
            }
            sizes={props.node.frontmatter.image.childImageSharp.sizes}
          />
        </GridCol>
      )}
      <GridCol>
        <ItemContent>
          <ItemTitle>
            <ItemLink to={`/posts/${props.node.frontmatter.slug}/`}>
              {props.node.frontmatter.title}
            </ItemLink>
          </ItemTitle>
          <ItemDate>{props.node.frontmatter.date}</ItemDate>
          <ItemExcerpt
            dangerouslySetInnerHTML={{ __html: props.node.excerpt }}
          />
        </ItemContent>
      </GridCol>
    </Item>
  );
};

export default ListItem;
