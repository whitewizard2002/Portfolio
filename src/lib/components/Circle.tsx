import styled from 'styled-components';
import React from 'react';

interface CircleProps {
  color: string;
  size: number;
  opacity: number;
  position: { x: number; y: number };
  offset: { x: number; y: number };
}

export const Circle: React.FC<CircleProps> = (props) => {
  return (
    <CircleContent
      color={props.color}
      size={props.size}
      opacity={props.opacity}
      id="floating-circle"
      position={props.position}
      offset={props.offset}
    />
  );
};

const CircleContent = styled.div<{
  color: string;
  size: number;
  opacity: number;
  position: { x: number; y: number };
  offset: { x: number; y: number };
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: ${(props) => props.position.y - props.size / 2 + props.offset.y}px;
  left: ${(props) => props.position.x - props.size / 2 + props.offset.x}px;
  pointer-events: none;
  transition: transform 0.5s ease;
`;
