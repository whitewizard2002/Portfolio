import React from 'react';
import styled from 'styled-components';
import { TextTyper } from './TextTyper';

interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  return (
    <Wrapper>
      <TextTyper text={name} size="60px" weight="bold" color="#FFFFFF" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: url('../../../static/db_bg.png');
`;
