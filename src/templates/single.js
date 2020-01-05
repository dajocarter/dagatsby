import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import rehypeReact from "rehype-react";
import styled from "styled-components";
import Layout from '../components/Layout'
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";
import MarkdownVideo from "../components/markdown/video/MarkdownVideo";
import HeroUnit from "../components/HeroUnit";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "markdown-video": MarkdownVideo }
}).Compiler;

const SingleInfo = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

const SingleTitle = styled.h1`
  border-bottom: 1px solid #fff;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  color: #cfd2da;
`;

const SingleDate = styled.p`
  margin-bottom: 0;
`;

const Single = ({ data }) => (
  <Layout>
    <Content>
      <Helmet>
        {/* General Tags */}
        <title>{`${data.page.frontmatter.title} | ${
          data.site.siteMetadata.title
          }`}</title>
        <meta name="description" content={data.page.frontmatter.description} />
        <meta name="image" content={`${data.site.siteMetadata.url}`} />
        {/* Facebook Tags */}
        <meta property="og:title" content={data.page.frontmatter.title} />
        <meta
          property="og:url"
          content={`${data.site.siteMetadata.url}/posts/${
            data.page.frontmatter.slug
            }`}
        />
        <meta
          property="og:description"
          content={data.page.frontmatter.description}
        />
        <meta property="og:image" content={`${data.site.siteMetadata.url}`} />
        {/* Twitter Tags */}
        <meta name="twitter:title" content={data.page.frontmatter.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@dajocarter" />
        <meta
          name="twitter:description"
          content={data.page.frontmatter.description}
        />
        <meta name="twitter:image" content={`${data.site.siteMetadata.url}`} />
      </Helmet>
      <HeroUnit
        sizes={data.page.frontmatter.image.childImageSharp.sizes}
        alt={``}
        headline={data.page.frontmatter.title}
        blurb={data.page.frontmatter.description}
      />
      <SingleInfo>
        <SingleTitle>{data.page.frontmatter.title}</SingleTitle>
        <SingleDate>
          {data.page.fileAbsolutePath.includes(`projects`)
            ? `Released`
            : `Posted`}{" "}
          {data.page.frontmatter.date}
        </SingleDate>
      </SingleInfo>
      <MarkdownBody>{renderAst(data.page.htmlAst)}</MarkdownBody>
    </Content>
  </Layout>
);

export default Single;

export const singleQuery = graphql`
  query SingleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        url
      }
    }
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        description
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`;
