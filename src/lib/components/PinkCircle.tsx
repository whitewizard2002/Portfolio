import styled, { keyframes } from 'styled-components';
import React from 'react';

export const PinkCircle: React.FC = () => {
  return (
    <PinkCircleWrapper>
      <CircleContent />
    </PinkCircleWrapper>
  );
};

const sizeInOut = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
`;

const PinkCircleWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${sizeInOut} 10s ease-in-out infinite;
  height: 100px;
  width: 100px;
`;

const CircleContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${(props) => props.theme.pink};
`;
