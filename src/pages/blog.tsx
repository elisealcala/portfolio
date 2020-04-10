import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import BlogCard from '../components/blog-card';
import Layout from '../components/layout';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const postQuery = graphql`
  query blogQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            published
            date
            description
          }
        }
      }
    }
  }
`;

export default function Blog({ data }) {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Home" />
        {data.allMdx.edges.map((mdx) => (
          <BlogCard key={mdx.node.id} {...mdx.node} />
        ))}
      </Wrapper>
    </Layout>
  );
}
