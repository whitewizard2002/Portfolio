import React, { ReactNode } from 'react';
import { WelcomeBtn } from './lib/components/WelcomeBtn';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { TextTyper } from './lib/components/TextTyper';
import { Column } from './lib/components/Column';
import { FloatingCircles } from './lib/components/FloatingCircles';
import { theme } from './lib/theme/theme';
import { CyanSquare } from './lib/components/CyanSquare';
import { YellowTriangle } from './lib/components/YellowTriangle';
import { PurpleHexagon } from './lib/components/PurpleHexagon';
import { PinkCircle } from './lib/components/PinkCircle';
import { SkillCard } from './lib/components/SkillCard';
import { DetailCard } from './lib/components/DetailCard';

export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  const [welcomeBtnClicked, setWelcomeBtnClicked] = React.useState(false);
  const [removeWelcomeText, setRemoveWelcomeText] = React.useState(false);
  const [skillCardActive, setSkillCardActive] = React.useState(-1);
  const [showSkillCard, setShowSkillCard] = React.useState(false);

  const handleWelcomeBtnClick = () => {
    setWelcomeBtnClicked(true);
  };

  const handleShowSkillCard = React.useCallback(() => {
    setShowSkillCard(true);
  }, []);

  const handleRemoveWelcomeTxt = () => {
    setRemoveWelcomeText(true);
  };

  const handleSkillCardOnHover = React.useCallback((active: number) => {
    setSkillCardActive(active);
  }, []);

  const handleSkillCardOnHoverLeave = React.useCallback(() => {
    setSkillCardActive(-1);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ welcomeBtnClicked }}>
        <AppWrapper>
          <Column>
            {!removeWelcomeText && (
              <WelcomeTxtWrapper
                btnClicked={welcomeBtnClicked}
                onAnimationEnd={handleRemoveWelcomeTxt}
              >
                <TextTyper
                  text="Welcome"
                  weight="bold"
                  size="150px"
                  color="#ffffff"
                  style={{ textShadow: '0px 0px 5px 2px rgba(255,255,255,1)' }}
                />
              </WelcomeTxtWrapper>
            )}
            <WelcomeBtnWrapper>
              <WelcomeBtn
                text="Know about me"
                onClick={handleWelcomeBtnClick}
                handleShowSkillCard={handleShowSkillCard}
              />
            </WelcomeBtnWrapper>

            {welcomeBtnClicked && removeWelcomeText && (
              <SkillCardArray>
                <SkillCard
                  type="Languages"
                  onHover={() => {
                    return handleSkillCardOnHover(0);
                  }}
                  onHoverLeave={handleSkillCardOnHoverLeave}
                />
                <SkillCard
                  type="Databases"
                  onHover={() => {
                    console.log('setSkillCard(1)');

                    setSkillCardActive(1);
                  }}
                  onHoverLeave={() => {
                    setSkillCardActive(-1);
                  }}
                />
                <SkillCard
                  type="Tech"
                  onHover={() => {
                    console.log('setSkillCard(2)');

                    setSkillCardActive(2);
                  }}
                  onHoverLeave={() => {
                    setSkillCardActive(-1);
                  }}
                />
                {skillCardActive === 0 && <DetailCard type={0} />}
                {skillCardActive === 1 && <DetailCard type={1} />}
                {skillCardActive === 2 && <DetailCard type={2} />}
              </SkillCardArray>
            )}

            <FloatingCircles count={100} />

            {welcomeBtnClicked && <CyanSquare />}
            {welcomeBtnClicked && <PurpleHexagon />}
            {welcomeBtnClicked && <PinkCircle />}
            {welcomeBtnClicked && <YellowTriangle />}
          </Column>
        </AppWrapper>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: 'flex';
  height: 100%;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black}, ${props.theme.light_black})`};
  width: 100%;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0;
  }
`;

const WelcomeTxtWrapper = styled.div<{ btnClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.btnClicked &&
    css`
      animation: ${fadeOut} 0.75s ease-in-out forwards;
    `}
`;

const WelcomeBtnWrapper = styled.div`
  display: flex;
`;

const SkillCardArray = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export default App;
