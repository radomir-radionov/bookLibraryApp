import { Link } from 'react-router-dom';
import { ChevronRight_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const ModalStyled = styled.div`
  width: 528px;
  height: 492px;
  padding: 48px 56px;
  background: ${colors.MAIN_WHITE};
  border-radius: 16px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    height: 464px;
    padding: 24px 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  ${typography.desktop.H4};
`;

export const StepText = styled.p`
  ${typography.desktop.SUBTITLE_SMALL};
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    padding-left: 12px;
    margin-bottom: 18px;

    @media (max-width: ${device.tablet}) {
      gap: 10px;
    }
  }

  @media (max-width: ${device.tablet}) {
    gap: 10px;
  }
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginInfo = styled.p`
  display: flex;
  gap: 16px;
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_70};

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: ${device.mobileL}) {
    ${typography.mobile.BODY_LARGE};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 14px;
  padding: 3px 0;
  ${typography.mobile.BUTTON_SMALL};
  color: ${colors.MAIN_DARK};
  cursor: pointer;
`;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
`;

export const ChevronRightIcon = styled(ChevronRight_Icon)`
  position: relative;
  bottom: 3px;
`;
