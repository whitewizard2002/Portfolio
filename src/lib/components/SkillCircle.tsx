import React from 'react';
import styled from 'styled-components';
import CIcon from '../../../static/C';

interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = () => {
  return (
    <Wrapper>
      <CIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;
