import { Cat_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, formalization, typography } from 'styles';

export const BookStyled = styled.article`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 218px;
  padding: 16px;
  border-radius: 10px;
  background: ${colors.MAIN_WHITE};
  ${formalization.MAIN_SHADOW};
  transition: all 0.2s ease-out;
  cursor: pointer;

  @media (max-width: ${device.tablet}) {
    height: 182px;
  }

  @media (max-width: ${device.mobileL}) {
    justify-content: space-evenly;
    gap: 8px;
    padding-left: 8px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 120px;
  height: 170px;
  background: ${colors.GREY_BLACK_5};
  border: 1px solid ${colors.GREY_BLACK_40};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media (max-width: ${device.tablet}) {
    max-width: 70px;
    min-width: 70px;
    height: 100px;
  }
`;

export const Img = styled.img`
  flex: 1;
  max-width: 120px;
  height: 170px;
  border-radius: 3px;

  @media (max-width: ${device.tablet}) {
    max-width: 70px;
    min-width: 70px;
    height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${device.laptopL}) {
    width: 464px;
  }

  @media (max-width: ${device.mobileL}) {
    justify-content: flex-start;
    gap: 4px;
    width: 186px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${device.tablet}) {
    gap: 0;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${typography.desktop.MAIN_H5};

    .highlight {
      color: ${colors.OTHER_TEXT_SELECT};
      background-color: transparent;
    }

    @media (max-width: ${device.laptop}) {
      -webkit-line-clamp: 3;
      ${typography.desktop.H4};
    }

    @media (max-width: ${device.tabletM}) {
      ${typography.mobile.H3};
    }

    @media (max-width: ${device.tablet}) {
      margin-bottom: 3px;
      ${typography.mobile.SUBTITLE_SMALL};
    }
  }
`;

export const Author = styled.p`
  ${typography.desktop.BODY_LARGE};

  @media (max-width: ${device.tablet}) {
    ${typography.desktop.BODY_SMALL};
  }
`;

export const Active = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;

  button {
    width: 196px;
    height: 40px;
    padding: 0;
    ${typography.mobile.BUTTON_SMALL};
  }

  @media (max-width: ${device.laptopM}) {
    padding-bottom: 0;
    ${typography.desktop.BODY_SMALL};
  }

  @media (max-width: ${device.tablet}) {
    div > div > svg {
      width: 16px;
      height: 16px;
    }

    button {
      width: 186px;
    }
  }

  @media (max-width: ${device.mobileL}) {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 16px;
    }
  }
`;

export const DeliveryText = styled.span`
  ${typography.desktop.H4};
  text-transform: uppercase;
  color: ${colors.MAIN_ACCENT};

  @media (max-width: ${device.laptop}) {
    ${typography.mobile.BUTTON_LARGE};
  }
`;

export const CatIcon = styled(Cat_Icon)`
  @media (max-width: ${device.tablet}) {
    width: 32px;
  }
`;
