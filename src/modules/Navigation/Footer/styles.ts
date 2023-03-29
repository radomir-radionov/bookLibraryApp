import styled from 'styled-components';
import { colors, device } from 'styles';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  padding-bottom: 16px;

  @media (max-width: ${device.laptopM}) {
    padding: 16px 64px;
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0 16px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-top: 16px;
  border-top: 1px solid ${colors.GREY_BLACK_20};

  @media (max-width: ${device.tabletM}) {
    flex-direction: column;
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
