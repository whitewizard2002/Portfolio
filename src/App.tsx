import React, { ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillCard } from './lib/components/SkillCard';
import SkillBg from '../static/Skill_bg.jpg';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillCard type={'LANGUAGES'} />
        <SkillCard type={'DATABASES'} />
        <SkillCard type={'TECHNOLOGY'} />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  display: flex;
  background: url(${SkillBg});
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
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

export default App;
