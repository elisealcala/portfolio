import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';
import '../utils/i18n';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg);
    color: var(--text);
    transition: all ease 0.3s;
    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      margin: 0;
    }
    &.dark {
      --bg: #0D1219;
      --text: #fff;
      --code: #FFCB8B;
      --link: #989aff;
    }

    &.light {
      --bg: #fff;
      --text: #000;
      --code: #ac34fb;
      --link: #363ae6;
    }
  }
`;

const Wrapper = styled.div`
  font-family: 'system-ui', 'Neue Helvetica W02', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  & .app_wrapper {
    margin: 30px 16px;
    width: calc(100% - 32px);
    @media (min-width: 768px) {
      width: 600px;
      margin: 130px auto 60px;
    }
    @media (min-width: 1024px) {
      width: 960px;
    }
    @media (min-width: 1200px) {
      width: 1024px;
    }
    @media (min-width: 1920px) {
      width: 1400px;
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <div className="app_wrapper">{children}</div>
      </Wrapper>
    </>
  );
};

export default Layout;
