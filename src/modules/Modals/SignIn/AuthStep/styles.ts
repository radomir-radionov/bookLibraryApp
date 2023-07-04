import { Link } from 'react-router-dom';
import { ChevronRight_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type AssistiveTextProps = {
  visiable: boolean;
};

export const LinkStyled = styled(Link)`
  color: ${colors.MAIN_DARK};
  cursor: pointer;
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
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

export const Title = styled.h4`
  ${typography.desktop.H4};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > div {
    &:nth-child(2) {
      margin-bottom: 2px;
    }
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputAuthPasswordWrapper = styled.div`
  & > ${LinkStyled} {
    padding-left: 12px;
    ${typography.desktop.INFO_LARGE};
    text-transform: none;
    color: ${colors.GREY_BLACK_40};
  }
`;

export const AssistiveText = styled.p<AssistiveTextProps>`
  display: ${({ visiable }) => (visiable ? 'block' : 'none')};
  padding-left: 12px;
  ${typography.desktop.INFO_LARGE};
  color: ${colors.GREY_BLACK_40};

  span:first-child {
    color: ${colors.OTHER_NEGATIVE};
  }

  a {
    text-transform: none;
  }

  @media (max-width: ${device.tablet}) {
    padding: 0;
  }
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
