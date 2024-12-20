import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { TextTyper } from './TextTyper';
import { AppContext } from '../../App';

interface WelcomeBtnProps {
  text: string;
  onClick: () => void;
  handleShowSkillCard: () => void;
}

export const WelcomeBtn: React.FC<WelcomeBtnProps> = (props) => {
  const { welcomeBtnClicked } = React.useContext(AppContext);
  const [showText, setShowText] = React.useState(true);
  const showResume = () => {
    const callback = props.onClick;
    callback();
  };

  const handleTextAnimationEnd = () => {
    setShowText(false);
  };

  return (
    <BtnWrapper
      data-testid="welcomebtn-test"
      onClick={showResume}
      btnClicked={welcomeBtnClicked}
      onAnimationEnd={props.handleShowSkillCard}
    >
      <TextWrapper
        btnClicked={welcomeBtnClicked}
        onAnimationEnd={handleTextAnimationEnd}
      >
        <TextTyper
          size="25px"
          weight="bold"
          text={props.text}
          color="#ffffff"
        />
      </TextWrapper>
    </BtnWrapper>
  );
};

const fadeOut = keyframes`
  from{
    opacity:1;
  }to{
    opacity:0;
  }
`;

const convertToProfileIcon = keyframes`
  
  0%{
    width: 261px;
    height: 115px;
  }

  30%{
    width: 120px;
    height: 115px;
  }

  100%{
    width: 120px;
    height: 115px;
    transform: translateY(-250px);
  }
`;

const BtnWrapper = styled.button<{ btnClicked: boolean }>`
  display: flex;
  color: white;
  border: 5px solid transparent;
  background-image: ${(props) =>
    `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,1)), conic-gradient( ${props.theme.cyan},${props.theme.yellow},${props.theme.purple},${props.theme.pink}, ${props.theme.cyan})`};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 1em 2em;
  text-align: center;
  border-radius: 57px;
  width: 100%;

  ${(props) =>
    props.btnClicked &&
    css`
      animation: ${convertToProfileIcon} 3s ease-in-out forwards;
    `}

  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-in-out;
    cursor: pointer;
  }

  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.25s ease-in-out;
  }

  z-index: 1;
`;

const TextWrapper = styled.div<{ btnClicked: boolean }>`
  ${(props) =>
    props.btnClicked &&
    css`
      animation: ${fadeOut} 0.25s ease-in-out forwards;
    `};
`;
