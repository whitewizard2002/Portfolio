import React from 'react';
import styled from 'styled-components';
import { CertCard } from './CertCard';
import AIPractitionerImg from '../../../static/aws-certified-ai-practitioner.png';
import CCPractitionerImg from '../../../static/aws-certified-cloud-practitioner.png';

export type CertInfo = {
  image_url: string;
  img_alt: string;
  verification_url: string;
  issued_at: string;
  expires_at: string;
};

export const CertSection: React.FC = () => {
  const certArr: string[] = [
    'AWS Certified Cloud Practitioner',
    'AWS Certified AI Practitioner',
  ];

  const image_url_arr: CertInfo[] = [
    {
      image_url: AIPractitionerImg,
      img_alt: 'AWS Certified AI Practitioner Img',
      verification_url:
        'https://www.credly.com/badges/c312cc66-cbe2-4e20-a207-33ce23ff5bdb',
      issued_at: 'Feb 2025',
      expires_at: 'Feb 2028',
    },
    {
      image_url: CCPractitionerImg,
      img_alt: 'AWS Certified Cloud Practitioner Img',
      verification_url:
        'https://www.credly.com/earner/earned/badge/e1f0c726-78a5-4ee8-a427-8145fe6c5b52',
      issued_at: 'Jan 2025',
      expires_at: 'Jan 2028',
    },
  ];

  return (
    <Wrapper>
      <OptionGridWrapper>
        <OptionGrid>
          {certArr.map((content, key) => {
            return (
              <CertOptionWrapper key={key}>
                <CertOption key={key}>{content}</CertOption>
              </CertOptionWrapper>
            );
          })}
        </OptionGrid>
      </OptionGridWrapper>
      <Divider />
      {image_url_arr.map((content, key) => {
        return (
          <CertCard
            key={key}
            image_url={content.image_url}
            img_alt={content.img_alt}
            verification_url={content.verification_url}
            issued_at={content.issued_at}
            expires_at={content.expires_at}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.black},${props.theme.darkest_blue})`};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const OptionGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.black_75_translucent};
  align-self: stretch;
  justify-content: space-around;
`;

const OptionGrid = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

const CertOptionWrapper = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.black_75_translucent};
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.white};
  border-right: 5px solid ${(props) => props.theme.black_75_translucent};
  text-shadow:
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 20px ${(props) => props.theme.light_blue},
    0px 0px 10px ${(props) => props.theme.light_blue};
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    border-right: 5px solid ${(props) => props.theme.darker_blue};
    cursor: pointer;
    text-shadow: none;
  }
`;

const CertOption = styled.li`
  margin: 10px;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 2px;
  border-left: 1px solid ${(props) => props.theme.white};
  align-self: stretch;
`;
