import React from "react";
import PropTypes from "prop-types";
import Anchor from "../components/styled/Anchor";
import Helmet from "react-helmet";
import styled from "styled-components";
import Content from "../components/styled/Content";

const ListItem = styled.div`
  border: 2px solid #345;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Title = styled.h3`
  margin-top: 0;
`;
const MetaData = styled.small`
  font-style: italic;
  display: block;
  margin-bottom: 0.3625rem;
`;
const Excerpt = styled.p`
  margin-bottom: 0;
`;

const Archive = props => (
  <Content>
    <Helmet title={`${props.title}`} />
    {props.list
      .filter(({ node }) => !node.frontmatter.draft)
      .map(({ node }) => (
        <ListItem key={node.frontmatter.slug}>
          <Title>
            <Anchor to={`/${props.prefix}/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Anchor>
          </Title>
          <MetaData>{node.frontmatter.date}</MetaData>
          <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </ListItem>
      ))}
  </Content>
);

Archive.propTypes = {
  route: PropTypes.object
};

export default Archive;
