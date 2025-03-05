import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
  size: string;
  weight: 'bold' | 'normal';
  color: string;
  style?: React.CSSProperties;
  margin: string;
}

export const TextTyper: React.FC<TextProps> = (props): ReactElement => {
  return (
    <TextWrapper
      size={props.size}
      weight={props.weight}
      color={props.color}
      style={props.style}
      margin={props.margin}
    >
      {props.text}
    </TextWrapper>
  );
};

const TextWrapper = styled.p<{
  size: string;
  weight: string;
  color: string;
  margin: string;
}>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  z-index: 1;
  margin-top: ${(props) => props.margin};
  margin-bottom: ${(props) => props.margin};
`;
