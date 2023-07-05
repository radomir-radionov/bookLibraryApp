import { Cat_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, formalization, typography } from 'styles';

export const BookItemStyled = styled.article`
  display: flex;
  flex: 1;
  height: 218px;
  padding: 24px 24px 24px 16px;
  border-radius: 10px;
  background: ${colors.MAIN_WHITE};
  ${formalization.MAIN_SHADOW};
  transition: all 0.2s ease-out;
  cursor: pointer;

  @media (max-width: ${device.laptopL}) {
    padding: 16px 24px 16px 16px;
  }

  @media (max-width: ${device.tablet}) {
    height: fit-content;
    padding: 16px 16px 16px 8px;
  }

  @media (max-width: ${device.mobileL}) {
    justify-content: space-evenly;
  }
`;

export const ImgWrapper = styled.div`
  width: 132px;
  margin-right: 16px;

  @media (max-width: ${device.tablet}) {
    width: 70px;
    height: 100px;
    margin-right: 8px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${colors.GREY_BLACK_5};
  border: 1px solid ${colors.GREY_BLACK_40};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
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

    @media (max-width: ${device.mobileL}) {
      margin-bottom: 3px;
      ${typography.mobile.SUBTITLE_SMALL};
    }
  }
`;

export const Author = styled.p`
  ${typography.desktop.BODY_LARGE};

  @media (max-width: ${device.mobileL}) {
    ${typography.desktop.BODY_SMALL};
  }
`;

export const Active = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;

  @media (max-width: ${device.laptopM}) {
    padding-bottom: 0;
    ${typography.desktop.BODY_SMALL}
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    div {
      margin-top: 4px;
    }

    div > div > svg {
      width: 16px;
      height: 16px;
    }

    button {
      margin-top: 18px;
    }
  }
`;

export const CatIcon = styled(Cat_Icon)``;
