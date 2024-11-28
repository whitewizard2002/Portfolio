import styled from 'styled-components';
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

const RightRectangle = styled.div<{ type: number }>`
  position: absolute;
  left: 0px;
  width: ${(props) =>
    props.type === 0 ? '50px' : props.type === 1 ? '200px' : '700px'};

  height: 410px;
  background-color: ${(props) =>
    props.type === 0
      ? `${props.theme.cyan}`
      : props.type === 1
        ? `linear-gradient(45deg, ${props.theme.cyan},${props.theme.purple})`
        : `linear-gradient(45deg, ${props.theme.cyan},${props.theme.purple},${props.theme.yellow}`};
  z-index: 3;
`;

const LeftRectangle = styled.div<{ type: number }>`
  position: absolute;
  right: 0px;
  width: ${(props) =>
    props.type === 0 ? '700px' : props.type === 1 ? '200px' : '50px'};
  height: 410px;
  background-color: ${(props) =>
    props.type === 0
      ? `linear-gradient(45deg, ${props.theme.purple},${props.theme.yellow}, ${props.theme.pink})`
      : props.type === 1
        ? `linear-gradient(45deg, ${props.theme.yellow}, ${props.theme.pink})`
        : `${props.theme.pink}`};
  z-index: 3;
`;
