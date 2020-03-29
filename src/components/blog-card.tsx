import React from 'react'
import styled from 'styled-components'
import { BlogPostType } from '../types/blog'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 64px;
  & h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  & .date {
    font-size: 12px;
    font-weight: 300;
    margin-top: 8px;
  }
`

const BlogCard: React.FC<BlogPostType> = ({ id, frontmatter }) => {
  console.log(frontmatter?.date)
  return (
    <Card>
      <h2>{frontmatter?.title}</h2>
      <p>{frontmatter?.description}</p>
      <p className="date">{new Date(frontmatter?.date || '').toDateString()}</p>
    </Card>
  )
}

export default BlogCard
