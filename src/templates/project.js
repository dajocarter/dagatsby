import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";
import styled from "styled-components";
import LinkIcon from "react-icons/lib/fa/external-link";

const Date = styled.p`
  margin-bottom: 0.3625rem;
`;

const ExtLink = Date.extend`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
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

const Project = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${
        data.site.siteMetadata.title
      }`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <Date>Launched {data.markdownRemark.frontmatter.date}</Date>
    <div>
      {data.markdownRemark.frontmatter.links ? (
        <LinkList links={data.markdownRemark.frontmatter.links} />
      ) : (
        <ExtLink>
          <LinkIcon /> Links Not Available
        </ExtLink>
      )}
    </div>
    <MarkdownBody
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </Content>
);

export default Project;

export const projectQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        links
      }
    }
  }
`;
