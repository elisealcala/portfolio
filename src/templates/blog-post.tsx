import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import { Mdx, SitePageContext } from '../../types/gatsby-graphql';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
  & .links {
    align-self: flex-start;
    margin-top: 60px;
    font-size: 14px;
    a p {
      font-weight: 600;
    }
  }
`;

const BlogWrapper = styled.div`
  width: 100%;
  h1 {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 1.75rem;
    a {
      color: var(--link);
      word-wrap: break-word;
      &:hover {
        opacity: 0.7;
        transition: opacity ease 0.3s;
      }
    }
    code {
      font-family: 'SF Mono', Menlo, Monaco, Courier, monospace;
      font-size: 11pt;
      font-weight: 300;
      color: var(--code);
      padding: 4px;
      border-radius: 4px;
    }
  }
  hr {
    margin: 30px 0;
    opacity: 0.5;
  }
  img {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    width: 700px;
    h1 {
      margin-bottom: 3rem;
      font-size: 3rem;
    }
  }
`;

type BlogPostType = {
  data: {
    mdx: Mdx;
  };
  pageContext: NonNullable<SitePageContext>;
};

export default function PageTemplate({
  data: { mdx },
  pageContext,
}: BlogPostType) {
  const { previous, next } = pageContext;

  return (
    <Layout>
      <MainWrapper>
        <BlogWrapper>
          <h1>{mdx?.frontmatter?.title}</h1>
          <MDXRenderer>{mdx?.body || ''}</MDXRenderer>
          <div className="links">
            {previous && (
              <Link to={previous?.fields?.slug || ''}>
                <p>
                  Previous: <span>{previous?.frontmatter?.title}</span>
                </p>
              </Link>
            )}
            {next && (
              <Link to={next?.fields?.slug || ''}>
                <p>
                  Next: <span>{next?.frontmatter?.title}</span>
                </p>
              </Link>
            )}
          </div>
        </BlogWrapper>
      </MainWrapper>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        description
        date
      }
    }
  }
`;
