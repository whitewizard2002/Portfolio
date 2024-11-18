import { useEffect, useState } from 'react';
import { Circle } from './Circle';
import React from 'react';

interface FloatingCirclesProps {
  count: number;
}

export const FloatingCircles: React.FC<FloatingCirclesProps> = (props) => {
  const [circlesArr, setCirclesArr] = useState<
    {
      size: number;
      opacity: number;
      position: { x: number; y: number };
      offset: { x: number; y: number };
    }[]
  >([]);

  useEffect(() => {
    for (let i = 0; i < props.count; i++) {
      const size = 10;
      const opacity = Math.random() * 0.8 + 0.2;
      const position = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      const offset = {
        x: Math.random() * 30 - 15,
        y: Math.random() * 30 - 15,
      };

      setCirclesArr((prevCirclesArr) => [
        ...prevCirclesArr,
        { size: size, opacity: opacity, position: position, offset: offset },
      ]);
    }
  }, []);

  useEffect(() => {
    const handleCursorMove = (event: MouseEvent) => {
      const updatedCircles = circlesArr.map((circle, i) => {
        if (i < props.count) {
          const offset = {
            x: Math.random() * 30 - 15,
            y: Math.random() * 30 - 15,
          };

          return {
            ...circle,
            offset: offset,
          };
        }
        return circle;
      });
      setCirclesArr(updatedCircles);
    };

    document.body.addEventListener('mousemove', handleCursorMove);

    return () => {
      document.body.removeEventListener('mousemove', handleCursorMove);
    };
  }, []);
  return (
    <>
      {/* Render all circles */}
      {circlesArr.map((circle, index) => (
        <Circle
          color="#ffffff"
          key={index}
          size={circle.size}
          opacity={circle.opacity}
          position={circle.position}
          offset={circle.offset}
        />
      ))}
    </>
  );
};
