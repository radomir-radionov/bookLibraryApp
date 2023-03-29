import styled from 'styled-components';
import { colors, device } from 'styles';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  max-width: 1100px;
  width: 100%;
  padding: 16px 0;
  border-top: 1px solid ${colors.GREY_BLACK_20};

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const LegalText = styled.p`
  font-size: 16px;
  line-height: 24px;

  @media (max-width: ${device.tabletM}) {
    width: 200px;
    text-align: center;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Link = styled.a``;

export const Img = styled.img``;
