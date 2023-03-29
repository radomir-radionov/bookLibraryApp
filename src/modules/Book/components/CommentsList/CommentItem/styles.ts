import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type AvatarProps = {
  img: string;
};

export const CommentItemStyled = styled.li``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 18px;

  p {
    @media (max-width: ${device.tablet}) {
      margin-bottom: 12px;
    }
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 32px;
  height: 32px;
  background-image: ${({ img }) => (img ? `url(${img})` : null)};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;
export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_LARGE};
    flex-direction: column;
    gap: 0;
  }
`;

export const Name = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_70};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_LARGE};
  }
`;

export const CommentDate = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_70};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_LARGE};
  }
`;

export const Comment = styled.p`
  margin-top: 18px;
  ${typography.desktop.BODY_LARGE};
`;
