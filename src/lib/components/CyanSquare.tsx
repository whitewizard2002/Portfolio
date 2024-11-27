import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { AppContext } from '../../App';

export const CyanSquare: React.FC = (): ReactNode => {
  const { welcomeBtnClicked } = React.useContext(AppContext);

  return (
    <CyanSquareWrapper
      data-testid="cyansquare-utest"
      id="CyanSquare-id"
      appear={welcomeBtnClicked}
    />
  );
};

const rotateAround = keyframes`
    0%{
        transform: rotate(-45deg);
    }
    50%{
        transform: rotate(-77deg);
    }
    100%{
        transform: rotate(-45deg);
    }
`;

const appearAnimation = keyframes`
  0%{
    top: -600px;
    left: -100px;
  }
  100%{
    top: -300px;
    left: -100px;
  }
`;

const CyanSquareWrapper = styled.div<{ appear: boolean }>`
  display: flex;
  position: absolute;
  left: -100px;
  top: -600px;
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.theme.cyan};
  border-radius: 20px;
  ${(props) =>
    props.appear &&
    css`
      animation:
        ${appearAnimation} 4s ease-in-out forwards 0.25s,
        ${rotateAround} 10s ease-in-out infinite;
    `};
`;
