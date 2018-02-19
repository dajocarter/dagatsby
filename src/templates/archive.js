import React from "react";
import PropTypes from "prop-types";
import ListItem from "../components/ListItem";
import styled from "styled-components";

const List = styled.div`
  padding: 0 1rem 2rem;
`;

const PageTitle = styled.h1`
  color: #c8c8c8;
`;

const Archive = props => (
  <List>
    <PageTitle>{props.title}</PageTitle>
    {props.items.map(({ node }, index) => (
      <ListItem key={index} node={node} prefix={props.prefix} />
    ))}
  </List>
);

Archive.propTypes = {
  route: PropTypes.object
};

export default Archive;

export const archiveQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
