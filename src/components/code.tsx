import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { copyToClipboard } from '../utils/copy-to-clipboard';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0 2em;
  position: relative;
  padding: 2em 1em 2em 2em;
  border-radius: 3px;
  font-size: 10pt;
  font-weight: 400;
  font-family: 'SF Mono', Menlo, Monaco, Courier, monospace;
  overflow-x: auto;
  & .token-line {
    line-height: 1.5em;
    width: fit-content;
    padding-right: 1.5em;
    height: 1.5em;
  }
  & code {
    font-family: inherit;
    padding: 0 1em 0 0;
    display: block;
  }
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  top: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const Code = ({ codeString, theme, lang }) => {
  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      theme={theme}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {/* <CopyCode onClick={handleClick}>Copy</CopyCode> */}
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
