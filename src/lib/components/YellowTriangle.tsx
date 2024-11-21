import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const YellowTriangle: React.FC = () => {
  return (
    <YellowTriangleWrapper>
      <Triangle />
    </YellowTriangleWrapper>
  );
};

const rotateAround = keyframes`
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(45deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

const YellowTriangleWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  animation: ${rotateAround} 10s ease-in-out infinite;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  ${(props) => css`
    border-bottom: 100px solid ${props.theme.yellow};
  `};
`;
