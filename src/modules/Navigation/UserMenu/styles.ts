import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 32px 32px 52px 32px;
  ${typography.desktop.H5}
  border-top: 1px solid ${colors.GREY_BLACK_20};

  @media (max-width: ${device.laptop}) {
    width: 100%;
  }
`;

export const Item = styled.li`
  cursor: pointer;

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;
