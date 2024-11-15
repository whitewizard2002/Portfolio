import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
  size: string;
  weight: 'bold' | 'normal';
}

export const TextTyper: React.FC<TextProps> = (props): ReactElement => {
  return (
    <TextWrapper size={props.size} weight={props.weight}>
      {props.text}
    </TextWrapper>
  );
};

const TextWrapper = styled.p<{ size: string; weight: string }>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: #ffffff;
  text-align: center;
`;
