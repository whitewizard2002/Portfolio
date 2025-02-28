import React, { ReactNode } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import { theme } from './lib/theme/theme';
import { SkillCard } from './lib/components/SkillCard';
import SkillBg from '../static/Skill_bg.svg';
export const AppContext = React.createContext<{ welcomeBtnClicked: boolean }>({
  welcomeBtnClicked: false,
});

const App: React.FC = (): ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SkillCardsWrapper>
          <SkillCard type={'LANGUAGES'} />
          <SkillCard type={'DATABASES'} />
          <SkillCard type={'TECHNOLOGY'} />
        </SkillCardsWrapper>
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
  background-repeat: no-repeat;
  background-size: stretch;
  /* overflow-y: clip; */
  /* overflow-x: clip; */
`;

const SkillCardsWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export default App;
