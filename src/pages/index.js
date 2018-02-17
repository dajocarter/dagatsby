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

const List = styled.div`
  padding: 2rem 1rem;
`;

const PostList = List.extend`
  background: #31322d;
`;

const ProjectList = List.extend`
  background: #464642;
`;

const ArchiveLink = styled(Anchor)`
  background: transparent;
  border: 2px solid #39cccc;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fe7f2d;
  display: block;
  width: 200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: #e71d36;
  }
`;

const PostsLink = ArchiveLink.extend`
  &:hover {
    background: #102142;
  }
`;

const ProjectsLink = ArchiveLink.extend`
  &:hover {
    background: #293357;
  }
`;

const AboutMe = styled.div`
  background: #31322d;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const Description = styled.p`
  flex: 0 0 50%;
  margin: 0;

  @media (max-width: 1072px) {
    padding-top: 1rem;
  }
  @media (min-width: 1073px) {
    padding-left: 1rem;
  }
`;

const ProfilePic = styled(Img)`
  flex: 0 0 50%;
`;

const Index = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.resolutions.src
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
          data.profileImg.childImageSharp.resolutions.src
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
          data.profileImg.childImageSharp.resolutions.src
        }`}
      />
    </Helmet>
    <HeroUnit
      img={data.heroImg.childImageSharp.sizes}
      headline={`David Carter`}
      blurb={`Expert in Custom WordPress Development`}
    />
    <PostList>
      {data.posts.edges.map(({ node }, index) => (
        <ListItem key={index} node={node} />
      ))}
      <PostsLink to={`/posts/`}>View All Posts</PostsLink>
    </PostList>
    <ProjectList>
      {data.projects.edges.map(({ node }, index) => (
        <ListItem key={index} node={node} />
      ))}
      <ProjectsLink to={`/projects/`}>View All Projects</ProjectsLink>
    </ProjectList>
    <AboutMe>
      <ProfilePic resolutions={data.profileImg.childImageSharp.resolutions} />
      <Description>
        I am the Director of Technical Services at Tribeswell in Bloomington,
        Indiana. My favorite part of going to work is developing complex
        websites and solving all of the creative problems that arise in the
        process. I also handle ongoing maintenance like plugin updates and
        adding new features to sites, among other responsibilities.
      </Description>
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
      relativePath: { eq: "images/sasha-instagram-com-sanfrancisco-320885.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 6000) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    profileImg: file(relativePath: { eq: "images/profile-pic.jpg" }) {
      childImageSharp {
        resolutions(width: 500) {
          ...GatsbyImageSharpResolutions_tracedSVG
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
                resolutions(width: 350) {
                  ...GatsbyImageSharpResolutions_tracedSVG
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
                resolutions(width: 350) {
                  ...GatsbyImageSharpResolutions_tracedSVG
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
