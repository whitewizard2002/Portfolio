import React from 'react';
import styled from 'styled-components';
import StylusIcon from '../../../static/Stylus';
interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = () => {
  return (
    <Wrapper>
      <StylusIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transform: rotateY(180deg);
  width: 100px;
  height: 100px;
`;
