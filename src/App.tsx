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

export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  const [welcomeBtnClicked, setWelcomeBtnClicked] = React.useState(false);

  const handleWelcomeBtnClick = () => {
    setWelcomeBtnClicked(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ welcomeBtnClicked }}>
        <AppWrapper>
          <Column>
            <WelcomeTxtWrapper btnClicked={welcomeBtnClicked}>
              <TextTyper
                text="Welcome"
                weight="bold"
                size="150px"
                color="#ffffff"
                style={{ textShadow: '0px 0px 5px 2px rgba(255,255,255,1)' }}
              />
            </WelcomeTxtWrapper>
            <WelcomeBtnWrapper>
              <WelcomeBtn
                text="Know about me"
                onClick={handleWelcomeBtnClick}
              />
            </WelcomeBtnWrapper>
            <FloatingCircles count={100} />
            <CyanSquare />
            <YellowTriangle />
            <PurpleHexagon />
            <PinkCircle />
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
  overflow-y: clip;
  overflow-x: clip;
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

export default App;
