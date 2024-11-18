import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TextTyper } from './TextTyper';

interface WelcomeBtnProps {
  text: string;
}

export const WelcomeBtn: React.FC<WelcomeBtnProps> = (props) => {
  const toResumePage = () => {
    console.log('Now navigate to the Resume page');
  };

  return (
    <BtnWrapper data-testid="welcomebtn-test" onClick={toResumePage}>
      <TextTyper size="25px" weight="bold" text={props.text} />
    </BtnWrapper>
  );
};

const rotateGradient = keyframes`
  
  from {
    background-image: linear-gradient(black, black),
    linear-gradient(45deg, darkcyan, white, darkblue);
  }to{
    background-image: linear-gradient(black, black),
    linear-gradient(-45deg, darkcyan, white, darkblue);
  }
`;

const BtnWrapper = styled.button`
  display: flex;
  background-color: #000000;
  color: white;
  border: 5px solid transparent;
  background-image: linear-gradient(black, black),
    linear-gradient(45deg, darkcyan, white, darkblue);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 1em 2em;
  text-align: center;
  border-radius: 57px;

  &:hover {
    animation: ${rotateGradient} 1s forwards ease-in-out;
    cursor: pointer;
  }
`;
