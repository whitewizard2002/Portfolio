import styled, { css, keyframes } from 'styled-components';
import React from 'react';
interface DetailCardProps {
  type: number;
}

export const DetailCard: React.FC<DetailCardProps> = (props) => {
  return (
    <>
      {props.type >= 0 && (
        <RightRectangle type={props.type} data-testid="rightrect-utest" />
      )}
      {props.type >= 0 && (
        <LeftRectangle type={props.type} data-testid="leftrect-utest" />
      )}
    </>
  );
};

const rightTypeZeroAppear = keyframes`
  to{
    transform: translateX(-1060px);
  }
`;

const rightTypeOneAppear = keyframes`
to{
  transform: translateX(-550px);
  }
`;

const rightTypeTwoAppear = keyframes`
  to{
  transform: translateX(-50px);
  }
`;

const RightRectangle = styled.div<{ type: number }>`
  position: absolute;
  right: ${(props) =>
    props.type === 0 ? '-1060px' : props.type === 1 ? '-550px' : '-50px'};
  width: ${(props) =>
    props.type === 0 ? '1060px' : props.type === 1 ? '550px' : '50px'};

  height: 410px;
  background: ${(props) =>
    `linear-gradient(135deg,${props.theme.yellow},${props.theme.pink})`};

  ${(props) =>
    props.type === 0
      ? css`
          animation: ${rightTypeZeroAppear} 0.6s ease-out forwards;
        `
      : props.type === 1
        ? css`
            animation: ${rightTypeOneAppear} 0.6s ease-out forwards;
          `
        : css`
            animation: ${rightTypeTwoAppear} 0.6s ease-out forwards;
          `};
`;

const leftTypeZeroAppear = keyframes`
    to{
      transform: translateX(50px);
    }
  `;

const leftTypeOneAppear = keyframes`
    to{
      transform: translateX(550px);
    }
  `;

const leftTypeTwoAppear = keyframes`
    to{
      transform: translateX(1060px);
    }
  `;

const LeftRectangle = styled.div<{ type: number }>`
  position: absolute;
  left: ${(props) =>
    props.type === 0 ? '-50px' : props.type === 1 ? '-550px' : '-1060px'};
  width: ${(props) =>
    props.type === 0 ? '50px' : props.type === 1 ? '550px' : '1060px'};
  height: 410px;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.theme.cyan}, ${props.theme.purple})`};

  ${(props) =>
    props.type === 0
      ? css`
          animation: ${leftTypeZeroAppear} 0.6s ease-out forwards;
        `
      : props.type === 1
        ? css`
            animation: ${leftTypeOneAppear} 0.6s ease-out forwards;
          `
        : css`
            animation: ${leftTypeTwoAppear} 0.6s ease-out forwards;
          `};
`;
