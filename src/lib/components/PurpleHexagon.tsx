import styled, { css, keyframes } from 'styled-components';
import React from 'react';
import { AppContext } from '../../App';
export const PurpleHexagon: React.FC = () => {
  const { welcomeBtnClicked } = React.useContext(AppContext);
  return (
    <PurpleHexagonWrapper
      appear={welcomeBtnClicked}
      data-testid="purplehexagonwrapper-utest"
    >
      <Hexagon data-testid="hexagon-utest" />
    </PurpleHexagonWrapper>
  );
};

const rotateAround = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const appearAnimation = keyframes`
  0%{
    top: -700px;
    left: 190px;
  }
  100%{
    top: -300px;
    left: 190px;
  }
`;

const PurpleHexagonWrapper = styled.div<{ appear: boolean }>`
  display: flex;
  position: absolute;
  left: 190px;
  top: -700px;
  ${(props) =>
    props.appear &&
    css`
      animation:
        ${appearAnimation} 4s ease-in-out forwards 0.25s,
        ${rotateAround} 20s ease-in-out infinite;
    `}
`;

const Hexagon = styled.div`
  height: 440px;
  width: 400px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${(props) => props.theme.purple};
  border-radius: 20px;
`;
