import styled, { css, keyframes } from 'styled-components';
import React from 'react';
import { AppContext } from '../../App';

interface CircleProps {
  color: string;
  size: number;
  opacity: number;
  position: { x: number; y: number };
}

export const Circle: React.FC<CircleProps> = (props) => {
  const colors = ['#2CCCC3', '#FACD3D', '#5626C4', '#E60576'];
  const { welcomeBtnClicked } = React.useContext(AppContext);
  const [goUpAnimationEnded, setGoUpAnimationEnded] = React.useState(false);
  const generateRandomValue = (min: number = -20, max: number = 20) =>
    Math.random() * (max - min) + min;

  const index = generateRandomValue(0, colors.length - 1);

  React.useEffect(() => {
    addEventListener('animationend', (event) => {
      console.log(event);
      setGoUpAnimationEnded(true);
    });

    return () => {
      removeEventListener('animationend', () => {});
    };
  }, []);

  return (
    <CircleContent
      color={colors[Math.round(index)]}
      size={props.size}
      opacity={props.opacity}
      id="floating-circle"
      position={props.position}
      randomX={generateRandomValue()}
      randomY={generateRandomValue()}
      animationDuration={generateRandomValue(7, 10)}
      doGoUpAnimation={welcomeBtnClicked}
    />
  );
};

const floatAnimation = keyframes`
  0%, 100%{
    transform: translateY(0) translateX(0);
  }

  50%{
    transform: translateY(var(--randomY)) translateX(var(--randomX));
  }
`;

const goUpAnimation = keyframes`
  to{
    top: -22px;
  }
`;

const CircleContent = styled.div<{
  color: string;
  size: number;
  opacity: number;
  position: { x: number; y: number };
  randomX: number;
  randomY: number;
  animationDuration: number;
  doGoUpAnimation: boolean;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: ${(props) => props.position.y - props.size / 2}px;
  left: ${(props) => props.position.x - props.size / 2}px;
  pointer-events: none;
  --randomX: ${(props) => props.randomX}px;
  --randomY: ${(props) => props.randomY}px;
  animation: ${floatAnimation} ${(props) => props.animationDuration}s
    ease-in-out infinite;
  box-shadow: ${(props) =>
    `0px 0px 5px 2px rgba(255,255,255, ${props.opacity})`};

  ${(props) =>
    props.doGoUpAnimation &&
    css`
      animation: ${goUpAnimation} 2s ease-in-out forwards;
    `}
`;
