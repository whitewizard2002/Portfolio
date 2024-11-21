import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

export const CyanSquare: React.FC = (): ReactNode => {
  return <CyanSquareWrapper id="CyanSquare-id"></CyanSquareWrapper>;
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

const CyanSquareWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${rotateAround} 10s ease-in-out infinite;
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.theme.cyan};
`;
