import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
  return <ThemeWrapper>{props.children}</ThemeWrapper>;
};

const ThemeWrapper = styled.div`
  font-family: 'Geist Mono';
`;
