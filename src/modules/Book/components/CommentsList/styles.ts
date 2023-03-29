import { Chevron_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type SubTitleBoxProps = {
  $isListOpen: boolean;
};

export const Wrapper = styled.section`
  width: 730px;
  margin-top: 0;

  .editCommentButton {
    border: 1px solid ${colors.GREY_BLACK_20} !important;
    color: ${colors.MAIN_DARK} !important;
    background: ${colors.MAIN_WHITE} !important;
    background-color: rgba(0, 0, 0, 0) !important;
  }

  @media (max-width: ${device.laptopM}) {
    width: 100%;
  }
`;

export const SubTitleBox = styled.div<SubTitleBoxProps>`
  margin-bottom: ${({ $isListOpen }) => {
    return $isListOpen ? '16px' : '42px';
  }};

  svg {
    rotate: ${({ $isListOpen }) => {
      return $isListOpen ? '180deg' : 0;
    }};
  }
`;

export const ListWrapper = styled.div``;

export const Qty = styled.span`
  margin-left: 6px;
  ${typography.desktop.BODY_MEDIUM}
  color: ${colors.GREY_BLACK_40};
`;

export const CommentsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-bottom: 45px !important;

  @media (max-width: ${device.desktop}) {
    gap: 35px;
  }

  @media (max-width: ${device.tablet}) {
    margin-bottom: 23px !important;
  }
`;

export const ChevronIcon = styled(Chevron_Icon)`
  margin-left: 28px;
  cursor: pointer;

  path {
    fill: ${colors.MAIN_DARK};
  }
`;
