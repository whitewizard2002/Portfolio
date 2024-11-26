import React from 'react';
import styled from 'styled-components';

interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = () => {
  return (
    <Wrapper>
      <Image />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Image = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100px;
  height: 100px;
`;
