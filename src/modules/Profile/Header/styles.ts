import { ActionAvatar_Icon } from 'assets';
import styled from 'styled-components';
import { device, other, typography } from 'styles';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
  }
`;

export const ProfileAvatar = styled.div``;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${device.tablet}) {
    align-items: center;
  }
`;

export const Text = styled.span`
  ${typography.desktop.H1};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H2};
  }

  @media (max-width: ${device.mobileS}) {
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  filter: ${other.MAIN_FILTER};
`;

export const InputFileUpload = styled.input`
  display: none;
`;

export const Label = styled.label``;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: unset;
  border-radius: 50%;
  color: transparent;
  background: #363636;
  background: linear-gradient(0deg, #363636 26%, transparent 26%);
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  overflow: hidden;
`;

export const Img = styled.img``;

export const ActionAvatarIcon = styled(ActionAvatar_Icon)`
  position: absolute;
  top: 120px;
  left: 64px;
`;
