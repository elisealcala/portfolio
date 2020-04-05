import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Colfax, 'Neue Helvetica W02', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
`;

const Layout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
