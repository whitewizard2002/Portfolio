import styled, { css, keyframes } from 'styled-components';
import React from 'react';
import { AppContext } from '../../App';

interface CircleProps {
  size: number;
  opacity: number;
  position: { x: number; y: number };
}
const goUpAnimation = (distance: number) => keyframes`
  to{
    transform: translateY(-${distance}px);
  }
`;

const floatAnimation = keyframes`
  0%, 100%{
    transform: translateY(0) translateX(0);
  }

  50%{
    transform: translateY(var(--randomY)) translateX(var(--randomX));
  }
`;

export const Circle: React.FC<CircleProps> = (props) => {
  const goUpAnimationName = goUpAnimation(0).name;
  const colors = ['#2CCCC3', '#FACD3D', '#5626C4', '#E60576'];
  const { welcomeBtnClicked } = React.useContext(AppContext);
  const [goUpAnimationEnded, setGoUpAnimationEnded] = React.useState(false);
  const generateRandomValue = (min: number = -20, max: number = 20) =>
    Math.random() * (max - min) + min;

  const index = generateRandomValue(0, colors.length - 1);

  // React.useEffect(() => {
  //   addEventListener(
  //     'animationend',
  //     (event: React.AnimationEvent<HTMLDivElement>) => {
  //       if (event.animationName === goUpAnimation.getName())
  //         setGoUpAnimationEnded(true);
  //     },
  //   );

  //   return () => {
  //     removeEventListener('animationend', () => {});
  //   };
  // }, []);

  const handleAnimationEnd = React.useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      console.log(event.animationName, goUpAnimationName);
      if (event.animationName === goUpAnimationName) {
        setGoUpAnimationEnded(true);
      }
    },
    [goUpAnimationName],
  );

  return (
    !goUpAnimationEnded && (
      <CircleContent
        color={colors[Math.round(index)]}
        size={props.size}
        opacity={props.opacity}
        position={props.position}
        randomX={generateRandomValue()}
        randomY={generateRandomValue()}
        animationDuration={generateRandomValue(7, 10)}
        doGoUpAnimation={welcomeBtnClicked}
        data-testid="circle-utest"
        onAnimationEnd={handleAnimationEnd}
      />
    )
  );
};

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
      animation: ${goUpAnimation(props.position.y - props.size / 2 + 22)} 2s
        ease-in-out forwards;
    `}
`;
