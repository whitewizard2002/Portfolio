import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { IntroSection } from './lib/components/IntroSection';

export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  const [welcomeBtnClicked, setWelcomeBtnClicked] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ welcomeBtnClicked }}>
        <AppWrapper>
          <IntroSection name="Aadit Harshal Baldha" />
        </AppWrapper>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black}, ${props.theme.light_black})`};
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

export default App;
