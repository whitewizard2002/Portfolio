import React from 'react';
import styled, { useTheme } from 'styled-components';
import { TextTyper } from './TextTyper';
import introBg from '../../../static/db_bg.png';
import DpImg from '../../../static/dp.jpeg';
interface IntroSectionProps {
  name: string;
}

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const name = props.name;
  const theme = useTheme();
  return (
    <Wrapper>
      <DpWrapper>
        <DpImage />
      </DpWrapper>
      <NameWrapper>
        <TextTyper
          text={name}
          size="45px"
          weight="bold"
          color={theme.white}
          margin="30px"
        />
        <SummaryWrapper>Hello World!!</SummaryWrapper>
      </NameWrapper>
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
`;

const DpWrapper = styled.div`
  display: flex;
  width: 25%;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const DpImage = styled.div`
  width: 100%;
  height: 228px;
  background-image: url(${DpImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const SummaryWrapper = styled.div`
  font-size: 25px;
  color: ${(props) => props.theme.white};
`;
