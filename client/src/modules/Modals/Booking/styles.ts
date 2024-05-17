import { ActionClose_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
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

  @media (max-width: ${device.tablet}) {
    gap: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  .btnClose {
    position: absolute;
    right: 32px;
    top: 32px;
    padding: 12px;
    background-color: ${colors.GREY_BLACK_5};

    @media (max-width: ${device.tablet}) {
      right: 16px;
      top: 16px;
      padding: 8px;
    }
  }
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
