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

const leftTypeZeroAppear = keyframes`
  0%{
    left: -50px;
  }
  100%{
    left: 0px;
  }
`;

const leftTypeOneAppear = keyframes`
  0%{
    left: -550px;
  }
  100%{
    left: 0px;
  }
`;

const leftTypeTwoAppear = keyframes`
  0%{
    left: -700px;
  }
  100%{
    left: 0px;
  }
`;

const RightRectangle = styled.div<{ type: number }>`
  position: absolute;
  left: ${(props) =>
    props.type === 0 ? '-50px' : props.type === 1 ? '-550px' : '-700px'};
  width: ${(props) =>
    props.type === 0 ? '50px' : props.type === 1 ? '550px' : '700px'};

  height: 410px;
  background: ${(props) =>
    props.type === 0
      ? `linear-gradient(135deg, ${props.theme.cyan},${props.theme.purple})`
      : props.type === 1
        ? `linear-gradient(135deg, ${props.theme.cyan},${props.theme.purple})`
        : `linear-gradient(135deg, ${props.theme.cyan},${props.theme.purple},${props.theme.yellow}`};

  ${(props) =>
    props.type === 0
      ? css`
          animation: ${leftTypeZeroAppear} 0.6s ease-out forwards;
        `
      : props.type === 1
        ? css`
            animation: ${leftTypeOneAppear} 0.9s ease-out forwards;
          `
        : css`
            animation: ${leftTypeTwoAppear} 1.2s ease-out forwards;
          `};
`;

const rightTypeZeroAppear = keyframes`
  from{
    right: -1060px
  }to{
    right: 0px;
  }
`;

const rightTypeOneAppear = keyframes`
  from{
    right: -550px
  }to{
    right: 0px;
  }
`;

const rightTypeTwoAppear = keyframes`
  from{
    right: -50px
  }to{
    right: 0px;
  }
`;

const LeftRectangle = styled.div<{ type: number }>`
  position: absolute;
  right: ${(props) =>
    props.type === 0 ? '-1060px' : props.type === 1 ? '-550px' : '-50px'};
  width: ${(props) =>
    props.type === 0 ? '1060px' : props.type === 1 ? '550px' : '50px'};
  height: 410px;
  background: ${(props) =>
    props.type === 0
      ? `linear-gradient(135deg, ${props.theme.yellow}, ${props.theme.pink})`
      : props.type === 1
        ? `linear-gradient(135deg, ${props.theme.yellow}, ${props.theme.pink})`
        : `${props.theme.pink}`};

  ${(props) =>
    props.type === 0
      ? css`
          animation: ${rightTypeZeroAppear} 0.6s ease-out forwards;
        `
      : props.type === 1
        ? css`
            animation: ${rightTypeOneAppear} 0.9s ease-out forwards;
          `
        : css`
            animation: ${rightTypeTwoAppear} 1.2s ease-out forwards;
          `};
`;
