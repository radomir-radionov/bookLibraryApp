import { ActionClose_Icon, ActionSearching_Icon, ActionSearchingC_Icon } from 'assets';
import styled, { css } from 'styled-components';
import { colors, device, other, typography } from 'styles';

type TForm = {
  $visible: boolean;
};

type TButton = {
  $variant: string;
  $isInpFocused?: boolean;
};

export const SearchBarStyled = styled.div``;

export const Label = styled.label`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  ${typography.desktop.BODY_SMALL};
  outline: none;
  border: none;

  ::placeholder {
    color: ${colors.GREY_BLACK_40};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Form = styled.form<TForm>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-basis: 350px;
  flex-shrink: 1;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${colors.MAIN_WHITE};
  filter: ${other.MAIN_FILTER};
  transition: all 0.2s ease-out;
  caret-color: rgba(248, 54, 0, 1);

  &:hover {
    filter: ${other.FILTER_СRYSTAL};
  }

  &:active {
    box-shadow: none;
    filter: ${other.FILTER_LIGHT};
  }

  @media (max-width: ${device.laptop}) {
    flex-basis: 274px;
  }

  @media (max-width: ${device.tablet}) {
    display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
    flex-basis: 288px;
    ${typography.mobile.BODY_SMALL}

    ${Label} {
      display: none;
    }
  }
`;

export const Btn = styled.button<TButton>`
  width: 16px;
  height: 20px;
  background-color: transparent;

  ${({ $variant, $isInpFocused }) => {
    return $variant === 'desctop'
      ? css`
          position: relative;

          svg {
            display: ${$isInpFocused ? 'flex' : 'none'};
          }
        `
      : css`
          svg {
            display: flex;
          }
        `;
  }};
`;

export const ActionSearchingIcon = styled(ActionSearching_Icon)``;

export const ActionSearchingCIcon = styled(ActionSearchingC_Icon)``;

export const ActionCloseIcon = styled(ActionClose_Icon)``;
