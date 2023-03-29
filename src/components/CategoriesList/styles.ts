import styled from 'styled-components';

type CategoriesListStyledProps = {
  $isLength: number;
};

export const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 42px;
`;

export const CategoriesListStyled = styled.ul<CategoriesListStyledProps>`
  display: ${({ $isLength }) => ($isLength ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 0px 20px;
  margin-bottom: 42px;
`;
