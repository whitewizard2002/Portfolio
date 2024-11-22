import styled from 'styled-components';
import React from 'react';
import { TextTyper } from './TextTyper';
import { SkillCircle } from './SkillCircle';
interface SkillCardProps {
  type: 'Languages' | 'Databases' | 'Tech';
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  const languages = ['Java', 'Python', 'JavaScript', 'Typescript', 'R'];
  const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'GraphDB'];
  const technologies = [
    'Git',
    'Github',
    'React',
    'ExpressJS',
    'Django',
    'Stylus',
    'SASS',
  ];

  return (
    <SkillCardWrapper>
      <OuterBg>
        <ContentWrapper>
          <Content>
            {props.type === 'Languages' ? (
              <>
                <TextTyper
                  text="Languages"
                  size="16px"
                  weight="bold"
                  color="#ffffff"
                />
                <SkillCircleArray>
                  {languages.map((language) => {
                    return <SkillCircle key={language} text={language} />;
                  })}
                </SkillCircleArray>
              </>
            ) : props.type === 'Databases' ? (
              <>
                <TextTyper
                  text="Databases"
                  size="16px"
                  weight="bold"
                  color="#ffffff"
                />
                <SkillCircleArray>
                  {databases.map((database) => {
                    return <SkillCircle key={database} text={database} />;
                  })}
                </SkillCircleArray>
              </>
            ) : (
              <>
                <TextTyper
                  text="Technologies"
                  size="16px"
                  weight="bold"
                  color="#ffffff"
                />
                <SkillCircleArray>
                  {technologies.map((technologies) => {
                    return (
                      <SkillCircle key={technologies} text={technologies} />
                    );
                  })}
                </SkillCircleArray>
              </>
            )}
          </Content>
        </ContentWrapper>
      </OuterBg>
    </SkillCardWrapper>
  );
};

const SkillCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
`;

const OuterBg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4px 4px;
  border-radius: 5px;
  background: ${(props) =>
    `conic-gradient(${props.theme.yellow},${props.theme.cyan},${props.theme.purple},${props.theme.pink})`};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 4px;
`;

const Content = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;

const SkillCircleArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 4px;
`;
