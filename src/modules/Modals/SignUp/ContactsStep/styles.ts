import { Link } from 'react-router-dom';
import { ChevronRight_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 528px;
  padding: 48px 56px;
  background: ${colors.MAIN_WHITE};
  border-radius: 16px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    padding: 24px 16px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Title = styled.h4`
  ${typography.desktop.H4}
`;

export const StepText = styled.p`
  ${typography.desktop.SUBTITLE_SMALL}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 14px;
  padding: 3px 0;
  ${typography.mobile.BUTTON_SMALL}
  color: ${colors.MAIN_DARK};
`;

export const InputFields = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 36px;
  }

  div:last-child {
    small {
      position: absolute;
      left: 0;
      top: 60px;
    }
  }

  p {
    padding-left: 12px;
    margin-bottom: 18px;

    @media (max-width: ${device.tablet}) {
      margin-bottom: 10px;
    }
  }
`;
