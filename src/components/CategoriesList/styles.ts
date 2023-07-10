import styled from 'styled-components';

type TCategoriesListStyled = {
  $length: number;
};

export const Wrapper = styled.div``;

export const CategoriesListStyled = styled.ul<TCategoriesListStyled>`
  display: ${({ $length }) => ($length ? 'flex' : 'none')};
  flex-direction: column;
  gap: 16px;
  padding: 16px 0px 0 20px;
`;
