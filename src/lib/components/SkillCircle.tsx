import React from 'react';
import styled from 'styled-components';
import { TextTyper } from './TextTyper';

interface SkillCircleProps {
  text: string;
}

export const SkillCircle: React.FC<SkillCircleProps> = (props) => {
  return (
    <Wrapper>
      <Image />
      <TextTyper text={props.text} size="16px" weight="bold" color="#ffffff" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Image = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100px;
  height: 100px;
`;
