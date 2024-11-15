import React, { ReactNode } from 'react';
import { WelcomeBtn } from './lib/components/WelcomeBtn';
import styled from 'styled-components';
import { TextTyper } from './lib/components/TextTyper';
import { Column } from './lib/components/Column';
import { ThemeProvider } from './lib/theme/ThemeProvider';

const App: React.FC = (): ReactNode => {
  return (
    <AppWrapper>
      <ThemeProvider>
        <Column>
          <TextTyper text="Welcome" weight="bold" size="150px" />
          <WelcomeBtn text="Know about me" />
        </Column>
      </ThemeProvider>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: 'flex';
  height: 100%;
  background-color: #000000;
  width: 100%;
`;

export default App;
