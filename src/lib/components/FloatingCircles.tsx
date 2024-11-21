import { useEffect } from 'react';
import { Circle } from './Circle';
import React from 'react';
import styled from 'styled-components';
interface FloatingCirclesProps {
  count: number;
}

interface Circle {
  size: number;
  opacity: number;
  position: { x: number; y: number };
}

export const FloatingCircles: React.FC<FloatingCirclesProps> = (props) => {
  const [circlesArr, setCirclesArr] = React.useState<Circle[]>([]);

  /** for setting up the floating circles */
  useEffect(() => {
    const initialCirclesArr = Array.from({ length: props.count }, () => {
      const size = Math.floor(Math.random() * 15) + 5;
      const opacity = Number(Math.random().toFixed(2));
      const position = {
        x: Math.random() * window.innerWidth - 20,
        y: Math.random() * window.innerHeight - 20,
      };
      return { size, opacity, position };
    });
    setCirclesArr(initialCirclesArr);
  }, [props.count]);

  return (
    <Wrapper>
      {/* Render all circles */}
      {circlesArr.map((circle, index) => (
        <Circle
          color="#E1E2E2"
          key={index}
          size={circle.size}
          opacity={circle.opacity}
          position={circle.position}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
