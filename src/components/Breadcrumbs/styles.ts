import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const Wrapper = styled.div`
  position: absolute;
  top: 138px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 24px 64px;
  color: ${colors.GREY_BLACK_40};
  background-color: ${colors.GREY_BLACK_5};
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptop}) {
    padding: 20px 64px;
    margin-bottom: 48px;
  }

  @media (max-width: ${device.tabletL}) {
    top: 108px;
  }

  @media (max-width: ${device.tablet}) {
    top: 88px;
    padding: 20px 24px;
    margin-bottom: 20px;
  }
`;

export const BreadcrumbsList = styled.div`
  max-width: 1100px;
  width: 100%;

  a::after {
    content: '';
    display: block;
    margin: 0 12px;
    width: 2px;
    height: 18px;
    transform: rotate(22deg);
    background-color: ${colors.GREY_BLACK_20};
    border-radius: 5px;

    @media (max-width: 400px) {
      height: 17px;
    }
  }

  a:first-child {
    display: inline-flex;
  }

  a:last-child {
    cursor: default;
  }

  a:last-child:after {
    display: none;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const LinkText = styled.span`
  ${typography.desktop.BODY_SMALL}

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.INFO_LARGE}
  }
`;
