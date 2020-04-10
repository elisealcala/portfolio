import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderWrapper = styled.div<{ isDark: boolean }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  max-width: 1920px;
  & .logo {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  & .links {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    & .icon {
      margin-left: 30px;
    }
    & .links_wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      > a:nth-child(1) {
        margin-right: 20px;
      }
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

const sunPath =
  'M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z';
const moonPath =
  'M7.5 11.5C7.5 17.8513 11.5 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C11.5 0 7.5 5.14873 7.5 11.5Z';

const variants = {
  dark: {
    d: moonPath,
    fill: 'white',
    rotate: 360,
    transition: {
      duration: 0.5,
    },
  },
  white: {
    d: sunPath,
    fill: 'black',
    rotate: 180,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  const [theme, setTheme] = useState<string | null>(null);
  let websiteTheme: string;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

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
        <h3 className="logo">elisealcala</h3>
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
        <div className="icon">
          <svg width="23" height="23" onClick={themeToggle}>
            <motion.path
              d={sunPath}
              fill="black"
              variants={variants}
              animate={theme === 'dark' ? 'dark' : 'white'}
            />
          </svg>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
