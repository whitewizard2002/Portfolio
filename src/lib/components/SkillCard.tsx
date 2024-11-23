import styled from 'styled-components';
import React from 'react';
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
    'Stylus',
    'SASS',
  ];

  return (
    <SkillCardWrapper>
      <OuterBg>
        <ContentWrapper>
          <FrontContent>
            {props.type === 'Languages' && <Image path="" />}
            {props.type === 'Databases' && <Image path="" />}
            {props.type === 'Tech' && <Image path="" />}
          </FrontContent>
          <BackContent>
            {props.type === 'Languages' ? (
              <>
                <SkillCircleArray>
                  {languages.map((language) => {
                    return <SkillCircle key={language} text={language} />;
                  })}
                </SkillCircleArray>
              </>
            ) : props.type === 'Databases' ? (
              <>
                <SkillCircleArray>
                  {databases.map((database) => {
                    return <SkillCircle key={database} text={database} />;
                  })}
                </SkillCircleArray>
              </>
            ) : (
              <>
                <SkillCircleArray>
                  {technologies.map((technologies) => {
                    return (
                      <SkillCircle key={technologies} text={technologies} />
                    );
                  })}
                </SkillCircleArray>
              </>
            )}
          </BackContent>
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
  width: 320px;
  padding: 0px;
  height: auto;
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
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 4px 4px;
`;

const FrontContent = styled.div`
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  backface-visibility: hidden;
  transition: transform 0.6s ease-out forwards;
`;

const Image = styled.img<{ path: string }>`
  background-image: ${(props) => props.theme.white};
`;

const BackContent = styled(FrontContent)`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
`;

const SkillCircleArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 20px;
  padding: 20px;
`;
