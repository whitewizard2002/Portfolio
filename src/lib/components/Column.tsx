import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Column: React.FC<PropsWithChildren> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
