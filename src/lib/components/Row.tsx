import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Row: React.FC<PropsWithChildren> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
