import React from 'react';
import 'normalize.css/normalize.css';
import './src/css/styles.css';
import theme from 'prism-react-renderer/themes/nightOwl';
import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/code';

const components = {
  pre: (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Code
        codeString={props.children.props.children.trim()}
        theme={theme}
        lang={matches?.groups?.lang ? matches.groups.lang : ''}
      />
    );
  },
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
