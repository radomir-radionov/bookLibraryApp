import styled from 'styled-components';
import { Chevron_Icon } from 'assets';
import ReactPaginate from 'react-paginate';

type TChevronIcon = {
  $view: 'right' | 'left';
};

export const СardsStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 16px;
`;

export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  li {
    cursor: pointer;
  }
  a {
    display: flex;
  }
  .active {
    color: rgb(255, 82, 83);
  }
`;

export const ChevronIcon = styled(Chevron_Icon)<TChevronIcon>`
  rotate: ${({ $view }) => ($view === 'right' ? '270deg' : '90deg')};
`;
