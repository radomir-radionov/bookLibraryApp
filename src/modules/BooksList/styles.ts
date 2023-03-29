import styled, { css } from 'styled-components';
import { colors, device, typography } from 'styles';

type BooksListStyledProps = {
  $displaying?: string;
};

export const BooksListStyled = styled.section<BooksListStyledProps>`
  ${(props) => {
    switch (props.$displaying) {
      case 'tiles':
        return css`
          display: flex;
          gap: 24px 20px;
          flex-wrap: wrap;
          transition: all 0.2s ease-out;
        `;
      default:
        return css`
          display: flex;
          flex-direction: column;
          gap: 16px;
        `;
    }
  }}

  @media (max-width: ${device.laptopL}) {
    gap: 24px 20px;
  }

  @media (max-width: ${device.tablet}) {
    justify-content: center;
    gap: 16px;
  }
`;

export const TestBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
`;

export const EmptyText = styled.h3`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 168px;
  ${typography.desktop.H3};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.tabletM}) {
    text-align: center;
    ${typography.mobile.H3};
    margin-top: 140px;
  }

  @media (max-width: ${device.mobileL}) {
    flex-direction: column;
  }
`;

export const EmptyData = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Message = styled.h3`
  display: flex;
  justify-content: center;
  padding-top: 168px;
  ${typography.desktop.H3};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.tablet}) {
    padding-top: 114px;
    ${typography.mobile.H3};
    text-align: center;
    transition: all 0.2s ease-out;
  }
`;
