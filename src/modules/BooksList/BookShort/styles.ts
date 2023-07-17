import { Cat_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, other, typography } from 'styles';

export const BookItemStyled = styled.article`
  width: 190px;
  height: 470px;
  padding: 8px 8px 16px 8px;
  border-radius: 10px;
  background: ${colors.MAIN_WHITE};
  filter: ${other.MAIN_FILTER};
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    filter: ${other.FILTER_LIGHT};
  }

  &:active {
    filter: ${other.FILTER_СRYSTAL};
  }

  @media (max-width: ${device.tablet}) {
    width: 100%;
    max-width: 271px;
    height: 470px;
  }
`;

export const ImgWrapper = styled.div`
  @media (max-width: ${device.tablet}) {
    display: flex;
    justify-content: center;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 174px;
  height: 242px;
  margin-bottom: 16px;
  background: ${colors.GREY_BLACK_5};
  border: 1px solid ${colors.GREY_BLACK_40};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 174px;
  height: 242px;
  margin-right: 0;
  margin-bottom: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 188px;

  button {
    width: 100%;
  }

  .editCommentButton {
    border: 1px solid ${colors.GREY_BLACK_20};
    color: ${colors.MAIN_DARK};
    background: ${colors.MAIN_WHITE};
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89px;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
`;

export const Author = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0;
  ${typography.desktop.BODY_SMALL}

  color: ${colors.GREY_BLACK_70};
`;

export const CatIcon = styled(Cat_Icon)``;
