import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { ExtendedCategoryProps } from 'types/categories';
import useWindowDimensions from 'utils/useWindowDimensions';

import { NavLinkStyled, NavText, Qty, СategoryItemStyled } from './styles';

type СategoryItemProps = {
  data: ExtendedCategoryProps;
};

const СategoryItem = ({ data }: СategoryItemProps) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { name, path, quantity } = data;

  let category = path;

  if (path === 'all') {
    category = 'books';
  }

  const dataTestIdCategory = width > 1024 ? `navigation-${category}` : `burger-${category}`;
  const dataTestIdCount = width > 1024 ? `navigation-book-count-for-${category}` : `burger-book-count-for-${category}`;

  const handleCategoryClick = () => dispatch(displayingContentActions.setBurgerMenuOpen());

  return (
    <СategoryItemStyled onClick={handleCategoryClick}>
      <NavLinkStyled to={`/books/${path}`}>
        <NavText data-test-id={dataTestIdCategory}>{name}</NavText>
        <Qty data-test-id={dataTestIdCount}>{quantity}</Qty>
      </NavLinkStyled>
    </СategoryItemStyled>
  );
};

export default memo(СategoryItem);
