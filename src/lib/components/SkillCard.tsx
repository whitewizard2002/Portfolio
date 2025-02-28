import styled, { keyframes } from 'styled-components';
import React from 'react';

interface SkillCardProps {
  type: 'LANGUAGES' | 'DATABASES' | 'TECHNOLOGY';
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  const languages = ['Java', 'Python', 'JavaScript', 'Typescript'];
  const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'];
  const technologies = [
    'Git',
    'Github',
    'React',
    'ExpressJS',
    'Stylus',
    'SASS',
  ];

  return (
    <SkillCardWrapper id="SkillCardWrapper-id">
      <OuterBg id="OuterBg-id">
        <ContentWrapper id="Conent-Wrapperid">
          <TitleBoxWrapper>
            <TitleWrapper>{props.type}</TitleWrapper>
          </TitleBoxWrapper>
          <BtnGridWrapper>
            {props.type == 'LANGUAGES' &&
              languages.map((language, index) => (
                <BtnWrapper key={index}>{language}</BtnWrapper>
              ))}
            {props.type == 'DATABASES' &&
              databases.map((db, index) => (
                <BtnWrapper key={index}>{db}</BtnWrapper>
              ))}
            {props.type == 'TECHNOLOGY' &&
              technologies.map((technology, index) => (
                <BtnWrapper key={index}>{technology}</BtnWrapper>
              ))}
          </BtnGridWrapper>
        </ContentWrapper>
      </OuterBg>
    </SkillCardWrapper>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(40px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillCardWrapper = styled.div`
  display: inline-block;
  position: relative;
  perspective: 1000px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const OuterBg = styled.div`
  width: 320px;
  height: 400px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.black_75_translucent};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${(props) => props.theme.white};
`;

const TitleBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white_25_translucent};
  color: ${(props) => props.theme.white};
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 10px ${(props) => props.theme.light_blue};
  padding: 10px 30px;
  font-size: 30px;
`;

const BtnGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const BtnWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.white_25_translucent};
  padding: 10px 20px;
  font-size: 20px;
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue};

  &:hover {
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    color: ${(props) => props.theme.black};
    text-shadow: none;
  }
`;
