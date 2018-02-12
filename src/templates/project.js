import React from "react";
import Helmet from "react-helmet";
import Anchor from "../components/styled/Anchor";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";
import styled from "styled-components";
import LinkIcon from "react-icons/lib/fa/external-link";

const LaunchDate = styled.p`
  margin-bottom: 0.3625rem;
`;

const ExtLink = styled.p`
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
        <Anchor target="_blank" href={link}>
          {link}
        </Anchor>
      </ExtLink>
    ))}
  </div>
);

const Project = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${
        data.site.metaData.title
        }`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <LaunchDate>Launched {data.markdownRemark.frontmatter.date}</LaunchDate>
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
      metaData {
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
