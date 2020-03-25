import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const FirstSide = styled.div`
  width: 50%;
  padding-top: 60px;
  & .description {
    width: 250px;
    margin-left: 100px;
    font-size: 18px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  & .box-text {
    margin-top: 25%;
  }
`

const SecondSide = styled.div`
  width: 50%;
  background-color: #f5f5f5;
  height: 100vh;
`

const TitleLink = styled.h2<{ selected: boolean }>`
  font-size: 96px;
  margin-left: 100px;
  margin-bottom: 60px;
  cursor: pointer;
  position: relative;
  width: fit-content;
  color: ${({ selected }) => (selected ? '#5a5a5a' : '#c8c8c8')};
  &:hover {
    &:before {
      background-color: ${({ selected }) => (selected ? '#5a5a5a' : '#c8c8c8')};
      left: 20px;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 65px;
    width: 120%;
    height: 4px;
    left: -45px;
    background-color: #fff;
    transition: all ease 0.3s;
  }
`

const IndexPage = () => {
  const [selected, setSelected] = React.useState('')
  const data = useStaticQuery(graphql`
    query postQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              published
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <SEO title="Home" />
      <FirstSide>
        <h1 className="description">
          Hi, my name is Elizabeth Alcalá. I'm a frontend developer.
        </h1>
        <div className="box-text">
          <TitleLink
            selected={selected === 'blog'}
            onClick={() => setSelected('blog')}
          >
            Blog
          </TitleLink>
          <TitleLink
            selected={selected === 'projects'}
            onClick={() => setSelected('projects')}
          >
            Projects
          </TitleLink>
        </div>
      </FirstSide>
      <SecondSide></SecondSide>
    </Wrapper>
  )
}

export default IndexPage
