import { Button } from 'components';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const СredentialsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const Title = styled.h4`
  ${typography.desktop.H4};
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  & > div {
    max-width: 540px;
    width: 100%;
    height: 92px;
  }

  & > div > small {
    display: block !important;
    padding-left: 12px !important;
  }

  input {
    border: none;
  }

  @media (max-width: ${device.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;

  button {
    width: 255px;

    @media (max-width: ${device.tablet}) {
      width: 100%;
    }
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Text = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_40};
`;

export const ButtonEdit = styled(Button)`
  border: 1px solid rgb(191, 196, 201);
  text-transform: uppercase;
  color: ${colors.MAIN_DARK};
  background: rgba(0, 0, 0, 0);
`;

export const ButtonSave = styled(Button)`
  text-transform: uppercase;

  &:disabled {
    border: none;
    color: ${colors.MAIN_WHITE};
    background: rgb(235, 235, 235);
  }
`;
