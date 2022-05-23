import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    margin: 0 0 16px 0;
    span {
      font-weight: 600;
    }
    @media (min-width: 768px) {
      width: 450px;
      font-size: 20px;
      line-height: 32px;
    }
  }
  @media (min-width: 768px) {
    & .contact {
      p {
        font-size: 16px;
      }
    }
  }
`;

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <p>
          Hi, I'm <span>Elizabeth</span>. I'm from Lima, Perú.
        </p>
        <p>
          I've been working as a front-end developer for almost five years with
          technologies such as <span>React</span>, <span>Typescript</span>,{' '}
          <span>Apollo</span> and many more.
        </p>
        <p>Feel free to contact me.</p>
        <div className="contact">
          <p>
            <a target="_blank" href="https://twitter.com/elisealcala">
              <span>Twitter</span>
            </a>
          </p>
          <p>
            <a target="_blank" href="https://github.com/elisealcala">
              <span>Github</span>
            </a>
          </p>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/elizalcala/">
              <span>Linkedin</span>
            </a>
          </p>
          <p>
            <span>elizabethalcala28@gmail.com</span>
          </p>
        </div>
      </Wrapper>
    </Layout>
  );
}
