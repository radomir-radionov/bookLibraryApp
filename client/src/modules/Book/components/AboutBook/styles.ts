import { Cat_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const About = styled.article`
  display: flex;
  gap: 30px;

  @media (max-width: ${device.laptopM}) {
    gap: 32px;
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.div``;

export const Info = styled.section`
  flex: 1;
  margin-top: 0;
`;

export const Header = styled.header`
  margin-bottom: 62px;

  button {
    width: 350px !important;
    height: 52px !important;
    border-radius: 30px !important;
    ${typography.desktop.BODY_LARGE};
    font-weight: 600 !important;

    @media (max-width: ${device.laptop}) {
      width: 306px !important;
    }

    @media (max-width: ${device.tablet}) {
      width: 100% !important;
      height: 40px !important;
      ${typography.mobile.BUTTON_SMALL};
    }
  }

  @media (max-width: ${device.laptopM}) {
    margin-bottom: 48px;
  }

  @media (max-width: ${device.laptop}) {
    margin-bottom: 0;
  }
`;

export const NameBook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: ${device.laptop}) {
    gap: 32px;
    margin-bottom: 32px;
  }

  @media (max-width: ${device.tablet}) {
    gap: 8px;
    margin-bottom: 42px;
  }
`;

export const Title = styled.h3`
  ${typography.desktop.H3};

  @media (max-width: ${device.laptop}) {
    ${typography.desktop.H4};
  }

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3};
  }
`;

export const Author = styled.p`
  ${typography.desktop.H5};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.laptop}) {
    ${typography.desktop.SUBTITLE_SMALL};
  }

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_SMALL};
  }
`;

export const Description = styled.section`
  display: block;

  @media (max-width: ${device.laptop}) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  ${typography.desktop.BODY_LARGE};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_SMALL};
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 360px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptop}) {
    width: 136px;
  }

  @media (max-width: ${device.tablet}) {
    width: 100%;
    max-width: 100%;
    max-height: 260px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 593px;
  background: ${colors.GREY_BLACK_5};
  border: 1px solid ${colors.GREY_BLACK_40};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media (max-width: ${device.laptop}) {
    flex-basis: 136px;
    height: 198px;
  }

  @media (max-width: ${device.tablet}) {
    flex-basis: 188px;
    height: 260px;
  }
`;

export const CatIcon = styled(Cat_Icon)``;
