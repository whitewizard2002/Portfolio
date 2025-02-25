import React from 'react';
import styled, { css, keyframes, useTheme } from 'styled-components';
import { TextTyper } from './TextTyper';
import introBg from '../../../static/db_bg.png';
import DpImg from '../../../static/dp.jpeg';
interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  const theme = useTheme();
  const [nameAnimationEnded, setNameAnimationEnded] = React.useState(false);
  return (
    <Wrapper>
      <DpWrapper data-testid="Dp-wrapper-test-id">
        <DpImage data-testid="Dp-img-test-id" />
      </DpWrapper>
      <InfoWrapper data-testid="Info-wrapper-test-id">
        <NameWrapper
          onAnimationEnd={() => setNameAnimationEnded(true)}
          data-testid="Name-wrapper-test-id"
        >
          <TextTyper
            text={name}
            size="45px"
            weight="bold"
            color={theme.white}
            margin="30px"
            data-testid="Name-texttyper-test-id"
          />
        </NameWrapper>
        <SummaryWrapper
          fadeAnimate={nameAnimationEnded}
          data-testid="summaryWrapper-test-id"
        >
          I am a passionate Web Developer and Machine Learning student,
          constantly exploring the intersection of frontend development and
          AI-driven solutions. With a strong foundation in React.js, JavaScript,
          and modern web technologies, I build seamless user experiences while
          also delving into the world of machine learning to create intelligent
          and data-driven applications.
        </SummaryWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: url(${introBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DpWrapper = styled.div`
  display: flex;
  width: 25%;
  background-size: cover;
  background-position: center;
  justify-content: center;
`;
const fadeIn = keyframes`
  from{
    opacity:0;
  }to{
    opacity:1;
  }`;

const DpImage = styled.div`
  width: 228px;
  height: 228px;
  background-image: url(${DpImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: ${(props) => `5px solid ${props.theme.black}`};
  animation: 1.5s ${fadeIn} ease-out forwards;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const leftToRight = keyframes`
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0);
  }
`;

const NameWrapper = styled.div`
  position: relative;
  animation: 0.75s ${leftToRight} ease-out forwards;
`;

const SummaryWrapper = styled.div<{ fadeAnimate: boolean }>`
  font-size: 25px;
  color: ${(props) => props.theme.white};
  margin-bottom: 20px;
  position: relative;
  opacity: 0;
  ${(props) =>
    props.fadeAnimate &&
    css`
      animation: 1.5s ${fadeIn} linear forwards;
    `}
`;
