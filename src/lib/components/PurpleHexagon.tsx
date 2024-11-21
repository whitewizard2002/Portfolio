import styled, { keyframes } from 'styled-components';
import React from 'react';
export const PurpleHexagon: React.FC = () => {
  return (
    <PurpleHexagonWrapper>
      <Hexagon />
    </PurpleHexagonWrapper>
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

const PurpleHexagonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${rotateAround} 10s ease-in-out infinite;
`;

const Hexagon = styled.div`
  height: 110px;
  width: 100px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${(props) => props.theme.purple};
`;
