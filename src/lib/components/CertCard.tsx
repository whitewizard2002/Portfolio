import React from 'react';
import styled from 'styled-components';
import { TextTyper } from './TextTyper';

interface CertCardProps {
  title: string;
  image_url: string;
  img_alt: string;
  verification_url: string;
  issued_at: string;
  expires_at: string;
}

export const CertCard: React.FC<CertCardProps> = (props) => {
  return (
    <Wrapper>
      <CertImg src={props.image_url} alt={props.img_alt} />
      <TextTyper text={props.title} size="30px" weight="bold" color="#ffffff" />
      <VerifyBtn
        onClick={() => {
          console.log('Verification Button clicked');
        }}
      >
        Verify
      </VerifyBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  border: ${(props) => props.theme.white};
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const CertImg = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

const VerifyBtn = styled.button`
  background: ${(props) =>
    props.theme.red}; // should be using the solo leveling themed button
  border: ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  padding: 10px 20px;
`;
