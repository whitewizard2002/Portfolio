import React from 'react';
import styled from 'styled-components';

interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = () => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;
const Icon = styled.svg``;
