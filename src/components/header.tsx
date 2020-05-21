import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DarkModeSwitch from './dark-mode-switch';

const HeaderWrapper = styled.div<{ isDark: boolean }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  max-width: 1920px;
  & .logo {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }
  & .links {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    a:nth-child(1) {
      margin-right: 32px;
    }
    & .links_wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 32px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      & .active {
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 768px) {
    position: fixed;
    padding: 30px;
    right: 50%;
    transform: translateX(50%);
    top: 0;
    & .links {
      flex-direction: row;
      align-items: center;
      a {
        margin: 0 20px;
      }
      & .links_wrapper {
        margin-top: 0;
      }
    }
  }
`;

const Header = () => {
  let websiteTheme: string;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  const [theme, setTheme] = useState<string>(websiteTheme);

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <HeaderWrapper isDark={theme === 'dark'}>
      <Link to="/">
        <h3 className="logo">Elizabeth Alcalá</h3>
      </Link>
      <div className="links">
        <div className="links_wrapper">
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </div>
        <DarkModeSwitch onClick={themeToggle} isDark={theme === 'dark'} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
