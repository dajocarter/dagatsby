import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Content from "../components/styled/Content";
import Article from "../components/styled/MarkdownBody";
import ListItem from "../components/ListItem";
import styled from "styled-components";

const PageTitle = styled.h1`
  color: #c8c8c8;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const Archive = props => (
  <Layout>
    <Content>
      <Article>
        <PageTitle>{props.title}</PageTitle>
        {props.items.map(({ node }, index) => (
          <ListItem key={index} node={node} prefix={props.prefix} />
        ))}
      </Article>
    </Content>
  </Layout>
);

Archive.propTypes = {
  route: PropTypes.object
};

export default Archive;
