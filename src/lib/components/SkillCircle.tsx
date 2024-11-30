import React from 'react';
import styled from 'styled-components';
import TypeScriptIcon from '../../../static/Typescript';
interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = () => {
  return (
    <Wrapper>
      <TypeScriptIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;
