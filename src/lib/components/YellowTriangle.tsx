import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { AppContext } from '../../App';

export const YellowTriangle: React.FC = () => {
  const { welcomeBtnClicked } = React.useContext(AppContext);

  return (
    <YellowTriangleWrapper
      appear={welcomeBtnClicked}
      data-testid="yellowtrianglewrapper-utest"
    >
      <Triangle data-testid="triangle-utest" />
    </YellowTriangleWrapper>
  );
};

const appearAnimation = keyframes`
  to{
    top: -100px;
  }
`;

const rotateAround = keyframes`
    0%{
        transform: rotate(10deg);
    }
    50%{
        transform: rotate(20deg);
    }
    100%{
        transform: rotate(10deg);
    }
`;

const YellowTriangleWrapper = styled.div<{ appear: boolean }>`
  display: flex;
  position: absolute;
  top: -500px;
  right: 190px;
  ${(props) =>
    props.appear === true &&
    css`
      animation:
        ${appearAnimation} 4s ease-in-out forwards 0.25s,
        ${rotateAround} 20s ease-in-out infinite;
    `}
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  ${(props) => css`
    border-bottom: 200px solid ${props.theme.yellow};
  `};
`;
