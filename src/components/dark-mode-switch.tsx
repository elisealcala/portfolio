import React from 'react';
import styled from 'styled-components';

type DarkModeTypes = {
  isDark: boolean;
  onClick: () => void;
};

const SwitchWrapper = styled.div<{ isDark: boolean }>`
  border: 1px solid ${({ isDark }) => (isDark ? '#fff' : '#000')};
  padding: 4px;
  width: 34px;
  border-radius: 15px;
  margin-left: 30px;
  & .switch {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
    transform: ${({ isDark }) => (isDark ? 'none' : 'translateX(20px)')};
    transition: transform ease-in-out 0.3s;
  }
`;

const DarkModeSwitch = ({ isDark, onClick }: DarkModeTypes) => {
  return (
    <SwitchWrapper onClick={onClick} isDark={isDark}>
      <div className="switch" />
    </SwitchWrapper>
  );
};

export default DarkModeSwitch;
