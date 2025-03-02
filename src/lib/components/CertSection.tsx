import React from 'react';
import styled from 'styled-components';
import { CertCard } from './CertCard';

export const CertSection: React.FC = () => {
  return (
    <Wrapper>
      <CertCard
        title={'Certified \nCloud \nPractitioner'}
        image_url="#"
        img_alt="AWS Badge Image"
        verification_url="#"
        issued_at="#"
        expires_at="#"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black},${props.theme.light_black})`};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
