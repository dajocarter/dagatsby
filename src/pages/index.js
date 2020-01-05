import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
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

const PostList = styled(List)``;

const ProjectList = styled(List)`
  background: #464642;
`;

const ArchiveLink = styled(Anchor)``;

const AboutMe = styled(Grid)`
  padding: 2rem 1rem;
  align-items: center;
  text-align: center;
`;

const Description = styled.p`
  margin: 0;
  text-align: left;
  @media (min-width: 768px) {
    padding-left: 1rem;
  }
`;

const ProfilePic = styled(Img)`
  border-radius: 50%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const ResumeLink = styled(Anchor)`
  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
      resume: file(relativePath: { eq: "David-Carter-Resume.pdf" }) {
        publicURL
      }
      cv: file(relativePath: { eq: "David-Carter-Curriculum-Vitae.pdf" }) {
        publicURL
      }
      heroImg: file(
        relativePath: { eq: "sasha-instagram-com-sanfrancisco-320885.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      profileImg: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
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
            excerpt(pruneLength: 280)
            frontmatter {
              slug
              date(formatString: "MMMM D, YYYY")
              image {
                childImageSharp {
                  fluid(maxWidth: 660) {
                    ...GatsbyImageSharpFluid_tracedSVG
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
            excerpt(pruneLength: 280)
            frontmatter {
              slug
              date(formatString: "MMMM D, YYYY")
              image {
                childImageSharp {
                  fluid(maxWidth: 660) {
                    ...GatsbyImageSharpFluid_tracedSVG
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
  `);
  return (
    <Layout>
      <Content>
        <Helmet>
          {/* General Tags */}
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="image"
            content={`${data.site.siteMetadata.url}${data.profileImg.childImageSharp.fluid.src}`}
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
            content={`${data.site.siteMetadata.url}${data.profileImg.childImageSharp.fluid.src}`}
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
            content={`${data.site.siteMetadata.url}${data.profileImg.childImageSharp.fluid.src}`}
          />
        </Helmet>
        <HeroUnit
          fluid={data.heroImg.childImageSharp.fluid}
          alt={``}
          headline={`David Carter`}
          blurb={`Software Engineer`}
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
          <GridCol column={50}>
            <ProfilePic
              fluid={data.profileImg.childImageSharp.fluid}
              alt={`David Carter`}
              title={`David Carter`}
            />
          </GridCol>
          <GridCol column={50}>
            <Description>
              I am the Director of Technical Services at Tribeswell in
              Bloomington, Indiana. My favorite part of going to work is
              developing complex websites and solving all of the creative
              problems that arise in the process. I also handle ongoing
              maintenance like plugin updates and adding new features to sites,
              among other responsibilities.
            </Description>
          </GridCol>
          <GridCol column={50}>
            <ResumeLink
              className={`button`}
              to={data.resume.publicURL}
              target={`_blank`}
            >
              Download Relevant Résumé
            </ResumeLink>
          </GridCol>
          <GridCol column={50}>
            <ResumeLink
              className={`button`}
              to={data.cv.publicURL}
              target={`_blank`}
            >
              Download Complete Résumé
            </ResumeLink>
          </GridCol>
        </AboutMe>
      </Content>
    </Layout>
  );
};

export default Index;
