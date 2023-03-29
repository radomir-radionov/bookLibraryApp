import { CloseError_Icon, ToastError_Icon, ToastSuccess_Icon } from 'assets';
import styled, { css } from 'styled-components';
import { colors, device, typography } from 'styles';
import { ToastTypes } from 'types/toast';

type ToastStyledProps = {
  $toastVariant: ToastTypes;
};

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 68px;
  max-width: 1100px;
  width: 100%;
  margin: 0;

  @media (max-width: ${device.laptopM}) {
    padding: 0 64px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 0 16px;
  }
`;

export const ToastStyled = styled.div<ToastStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 24px 32px;
  border-radius: 5px;

  ${({ $toastVariant }) => {
    switch ($toastVariant) {
      case 'success': {
        return css`
          border: 1.5px solid ${colors.OTHER_POSITIVE};
          background-color: ${colors.OTHER_POSITIVE_BG};
        `;
      }

      case 'error': {
        return css`
          border: 1.5px solid ${colors.OTHER_NEGATIVE};
          background-color: ${colors.OTHER_NEGATIVE_BG};
        `;
      }

      default: {
        return null;
      }
    }
  }}

  @media (max-width: ${device.tabletL}) {
    padding: 24px 16px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 12px 16px;
  }

  @media (max-width: ${device.tabletL}) {
    align-items: flex-start;
  }
`;

export const AlertBox = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${device.tabletL}) {
    align-items: flex-start;
    gap: 14px;
  }
`;

export const AlertText = styled.p`
  ${typography.desktop.SUBTITLE_LARGE};

  @media (max-width: ${device.tabletL}) {
    ${typography.mobile.SUBTITLE_SMALL};
  }
`;

export const ToastSuccessIcon = styled(ToastSuccess_Icon)`
  @media (max-width: ${device.tabletL}) {
    min-width: 24px;
    height: 24px;
  }
`;

export const ToastErrorIcon = styled(ToastError_Icon)`
  @media (max-width: ${device.tabletL}) {
    min-width: 24px;
    height: 24px;
  }
`;

export const CloseToastIcon = styled(CloseError_Icon)`
  cursor: pointer;

  @media (max-width: ${device.tabletL}) {
    min-width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;
