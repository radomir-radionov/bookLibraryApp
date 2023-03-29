import { ActionClose_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex: 1;
  max-width: 528px;
  padding: 48px;
  border-radius: 16px;
  background-color: ${colors.MAIN_WHITE};
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    max-width: 288px;
    padding: 42px 16px 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex: 1;

  .cancelBooking {
    border: 1px solid ${colors.GREY_BLACK_20};
    color: ${colors.MAIN_DARK};
    background: ${colors.MAIN_WHITE};
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h4`
  width: 250px;
  text-align: center;
  ${typography.desktop.H4};
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3};
  }
`;

export const CloseBtnBox = styled.div`
  position: absolute;
  bottom: 40px;
  left: 280px;
  transition: all 0.2s ease-out;

  button {
    width: 48px;
    height: 48px;
    background-color: ${colors.GREY_BLACK_5};
    filter: none;

    @media (max-width: ${device.tablet}) {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: ${device.tablet}) {
    left: 220px;
    bottom: 50px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ActionCloseIcon = styled(ActionClose_Icon)`
  width: 24px;
  height: 24px;

  path {
    fill: ${colors.ORANGE};
  }
`;
