import React, { ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { CertSection } from './lib/components/CertSection';

export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <CertSection />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black}, ${props.theme.darkest_blue})`};
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

export default App;
