import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CertCardProps {
  activeKey: number;
  optionKey: number;
  image_url: string;
  img_alt: string;
  verification_url: string;
  issued_at: string;
  expires_at: string;
}

interface VerifyBtnProps {
  url: string;
}

const VerifyBtn: React.FC<VerifyBtnProps> = ({ url }) => {
  const handleRedirect = () => {
    if (url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    } else {
      alert('Invalid URL');
    }
  };
  return <VerifyBtnWrapper onClick={handleRedirect}>Verify</VerifyBtnWrapper>;
};

export const CertCard: React.FC<CertCardProps> = (props) => {
  return (
    <Wrapper optionKey={props.optionKey} activeKey={props.activeKey}>
      <CertImg src={props.image_url} alt={props.img_alt} />
      <DateWrapper>
        {props.issued_at} - {props.expires_at}
      </DateWrapper>
      <VerifyBtn url={props.verification_url} />
    </Wrapper>
  );
};

const goUp = keyframes`
  from{
    transform: translateY(0px);
  }to{
    transform: translateY(-100%);
  }
`;

const goDown = keyframes`
  from{
    transform: translateY(-100%);
  }to{
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div<{ optionKey: number; activeKey: number }>`
  display: flex;
  background-color: ${(props) => props.theme.black_75_translucent};
  padding: 20px;
  border-radius: 5px;
  border: ${(props) => props.theme.white};
  flex-direction: column;
  align-items: center;
  width: 300px;

  position: absolute;
  top: 0px;
  left: 0px;
  ${({ optionKey, activeKey }) => css`
    animation: 0.5s ${optionKey === activeKey ? goDown : goUp} ease-out forwards;
    opacity: ${optionKey === activeKey ? 1 : 0};
    transition: opacity 0.5s ease-out;
  `}
`;

const CertImg = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

const DateWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.white};
  font-size: 20px;
  margin: 20px 0px;
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 10px ${(props) => props.theme.light_blue};
`;

const VerifyBtnWrapper = styled.button`
  background: ${(props) => props.theme.black_75_translucent};
  border: 2px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  padding: 10px 30px;
  font-size: 20px;
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 10px ${(props) => props.theme.light_blue};
  &:hover {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    cursor: pointer;
    text-shadow: none;
  }
`;
