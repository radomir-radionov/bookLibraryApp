import styled from 'styled-components';
import { device, typography } from 'styles';

type TParagraph = {
  mb?: string;
};

export const TermsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 825px;
  transition: all 0.5s ease-out;
`;

export const Chapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;

  @media (max-width: ${device.tabletM}) {
    margin-bottom: 0;
  }
`;

export const SubChapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;
`;

export const TwiceSubChapter = styled.div`
  padding-left: 30px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 32px;
  ${typography.desktop.H3}

  @media (max-width: ${device.tabletM}) {
    margin-bottom: 24px;
    ${typography.mobile.H3}
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 16px;
  ${typography.desktop.SUBTITLE_LARGE}

  @media (max-width: ${device.tabletM}) {
    ${typography.mobile.SUBTITLE_LARGE}
  }
`;

export const Paragraph = styled.p<TParagraph>`
  margin-bottom: ${({ mb }) => (mb ? 0 : '16px')};
  ${typography.desktop.BODY_LARGE}

  @media (max-width: ${device.tabletM}) {
    ${typography.mobile.BODY_LARGE}
  }
`;
