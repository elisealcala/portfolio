import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Maybe, MdxFields, MdxFrontmatter } from '../../types/gatsby-graphql';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 32px;
  & h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  & .date {
    font-size: 12px;
    font-weight: 300;
    margin-top: 8px;
  }
`;

type BlogCardType = {
  fields?: Maybe<Pick<MdxFields, 'slug'>>;
  frontmatter?: MdxFrontmatter;
};

const BlogCard: React.FC<BlogCardType> = ({ fields, frontmatter }) => {
  return (
    <Card>
      <Link to={fields?.slug || ''}>
        <h2>{frontmatter?.title}</h2>
      </Link>
      <p>{frontmatter?.description}</p>
      <p className="date">{new Date(frontmatter?.date || '').toDateString()}</p>
    </Card>
  );
};

export default BlogCard;
