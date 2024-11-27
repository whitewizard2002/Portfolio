import styled, { css, keyframes } from 'styled-components';
import React from 'react';
import { AppContext } from '../../App';

export const PinkCircle: React.FC = () => {
  const { welcomeBtnClicked } = React.useContext(AppContext);
  return (
    <PinkCircleWrapper
      appear={welcomeBtnClicked}
      data-testid="pinkcirclewrapper-utest"
    >
      <CircleContent data-testid="circlecontent-utest" />
    </PinkCircleWrapper>
  );
};

const appearAnimation = keyframes`
  0%{
    top: -400px;
    right: -50px;
  }
  100%{
    top: -200px;
    right: -50px;
  }
`;

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

const PinkCircleWrapper = styled.div<{ appear: boolean }>`
  display: flex;
  position: absolute;
  top: -500px;
  right: -75px;
  ${(props) =>
    props.appear &&
    css`
      animation:
        ${appearAnimation} 4s ease-in-out forwards 0.25s,
        ${sizeInOut} 10s ease-in-out infinite;
    `}
  height: 375px;
  width: 375px;
`;

const CircleContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${(props) => props.theme.pink};
`;
