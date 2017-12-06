import React from "react";
import PropTypes from "prop-types";
import Anchor from "../components/styled/Anchor";
import Helmet from "react-helmet";
import styled from "styled-components";
import Content from "../components/styled/Content";
import ClockIcon from "react-icons/lib/fa/clock-o";
import LinkIcon from "react-icons/lib/fa/external-link";

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

const MetaData = styled.div`
  font-style: italic;

  svg {
    margin-right: 0.5rem;
  }
`;

const Date = styled.p`
  margin-bottom: 0.3625rem;
  display: flex;
  align-items: center;
`;

const Excerpt = styled.p`
  margin-bottom: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Tag = styled.button`
  background-color: #1997c6;
  background-image: none;
  color: #fff;
  border: 2px solid transparent;
  border-color: #1997c6;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  flex: 0 0 auto;
  padding: 0.125rem 0.25rem;
  margin: 1rem 1rem 0 0;
  outline: none;
  cursor: pointer;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-shadow: none;
  text-decoration: none;
  text-align: center;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  &:hover {
    background-color: #106382;
    border-color: #106382;
  }
`;

const TagList = props => (
  <Tags>{props.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</Tags>
);

const ExtLink = Date.extend`
  a {
    word-break: break-word;
  }
`;

const LinkList = props => (
  <div>
    {props.links.map((link, index) => (
      <ExtLink key={index}>
        <LinkIcon />
        <Anchor href={link}>{link}</Anchor>
      </ExtLink>
    ))}
  </div>
);

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
          <MetaData>
            <Date>
              <ClockIcon />
              {node.frontmatter.date}
            </Date>
            {node.frontmatter.links ? (
              <LinkList links={node.frontmatter.links} />
            ) : null}
          </MetaData>
          <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          {node.frontmatter.tags ? (
            <TagList tags={node.frontmatter.tags} />
          ) : null}
        </ListItem>
      ))}
  </Content>
);

Archive.propTypes = {
  route: PropTypes.object
};

export default Archive;
