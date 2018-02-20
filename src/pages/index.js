import React from "react";
import PropTypes from "prop-types";
import Link, { navigateTo } from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import Anchor from "../components/styled/Anchor";
import HeroUnit from "../components/HeroUnit";
import ListItem from "../components/ListItem";
import styled from "styled-components";
import { Grid, GridCol } from "griz";

const List = styled.div`
  padding: 2rem 1rem;
  text-align: center;
`;

const PostList = List.extend``;

const ProjectList = List.extend`
  background: #464642;
`;

const ArchiveLink = styled(Anchor)``;

const AboutMe = styled(Grid)`
  padding: 2rem 1rem;
  align-items: center;
`;

const Description = styled.p`
  margin: 0;
  @media (min-width: 768px) {
    padding-left: 1rem;
  }
`;

const ProfilePic = styled(Img)``;

const Index = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
      {/* Facebook Tags */}
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
      {/* Twitter Tags */}
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@dajocarter" />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        name="twitter:image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
    </Helmet>
    <HeroUnit
      sizes={data.heroImg.childImageSharp.sizes}
      alt={``}
      headline={`David Carter`}
      blurb={`Expert in Custom WordPress Development`}
    />
    <PostList>
      {data.posts.edges.map(({ node }, index) => (
        <ListItem key={index} node={node} prefix={`posts`} />
      ))}
      <ArchiveLink className={`button`} to={`/posts/`}>
        View All Posts
      </ArchiveLink>
    </PostList>
    <ProjectList>
      {data.projects.edges.map(({ node }, index) => (
        <ListItem key={index} node={node} prefix={`projects`} />
      ))}
      <ArchiveLink className={`button`} to={`/projects/`}>
        View All Projects
      </ArchiveLink>
    </ProjectList>
    <AboutMe responsiveMd>
      <GridCol>
        <ProfilePic
          sizes={data.profileImg.childImageSharp.sizes}
          alt={`David Carter`}
          title={`David Carter`}
        />
      </GridCol>
      <GridCol>
        <Description>
          I am the Director of Technical Services at Tribeswell in Bloomington,
          Indiana. My favorite part of going to work is developing complex
          websites and solving all of the creative problems that arise in the
          process. I also handle ongoing maintenance like plugin updates and
          adding new features to sites, among other responsibilities.
        </Description>
      </GridCol>
    </AboutMe>
  </Content>
);

Index.propTypes = {
  route: PropTypes.object
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
    heroImg: file(
      relativePath: { eq: "sasha-instagram-com-sanfrancisco-320885.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 6000) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    profileImg: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes_tracedSVG
          src
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
      filter: {
        fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            image {
              childImageSharp {
                sizes(maxWidth: 660) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            title
            tags
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 3
      filter: {
        fileAbsolutePath: { glob: "/**/*/src/projects/**/*.md" }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            image {
              childImageSharp {
                sizes(maxWidth: 660) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            title
            tags
          }
        }
      }
    }
  }
`;
