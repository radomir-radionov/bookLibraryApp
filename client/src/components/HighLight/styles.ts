import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { colors, typography } from 'styles';

export const HighLightStyled = styled(Highlighter)`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${typography.desktop.SUBTITLE_SMALL};

  .highlight {
    color: rgb(255, 82, 83);
    background-color: ${colors.MAIN_WHITE};
  }
`;

export const Mark = styled.span`
  span {
    color: rgb(255, 82, 83) !important;
  }
`;
