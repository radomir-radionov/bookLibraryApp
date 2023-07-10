import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/selectors';
import { selectCategories } from 'redux/categories/selectors';
import { СategoryItem } from 'components';
import { createCategories } from 'utils/categories';

import { CategoriesListStyled, Wrapper } from './styles';

type TProps = {
  isOpen?: boolean;
};

const CategoriesList = ({ isOpen }: TProps) => {
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);

  const extendedCategories = useMemo(() => createCategories(books, categories), [books, categories]);

  return (
    <Wrapper hidden={isOpen}>
      <CategoriesListStyled $length={extendedCategories.length}>
        {extendedCategories?.map((category) => (
          <СategoryItem key={category.id} data={category} />
        ))}
      </CategoriesListStyled>
    </Wrapper>
  );
};

export default CategoriesList;
