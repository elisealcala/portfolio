import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import BlogCard from '../components/blog-card';
import Layout from '../components/layout';
import '../utils/i18n';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & .description {
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 16px 0;
    @media (min-width: 768px) {
      width: 450px;
      font-size: 32px;
    }
  }
  .blog_link {
    margin-top: 30px;
    font-size: 14px;
    text-decoration: underline;
  }
`;

export const postQuery = graphql`
  query postQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 4
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

export default function IndexPage({ data }) {
  const { t, i18n } = useTranslation('page');

  return (
    <Layout>
      <Wrapper>
        <SEO title="Home" />
        <h1 className="description">{t('heading')}</h1>
        <p>Check my latest posts.</p>
        {data.allMdx.edges.map((mdx) => (
          <BlogCard key={mdx.node.id} {...mdx.node} />
        ))}
        <div className="blog_link">
          <Link to="/blog">View all</Link>
        </div>
      </Wrapper>
    </Layout>
  );
}
