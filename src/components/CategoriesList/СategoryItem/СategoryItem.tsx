import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { TExtendedCategory } from 'types/categories';
import useWindowDimensions from 'utils/useWindowDimensions';

import { NavLinkStyled, NavText, Qty, СategoryItemStyled } from './styles';

type TProps = {
  data: TExtendedCategory;
};

const СategoryItem = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { name, path, quantity } = data;

  let category = path === 'all' ? 'books' : path;

  const dataTestIdCategory = width > 1024 ? `navigation-${category}` : `burger-${category}`;
  const dataTestIdCount = width > 1024 ? `navigation-book-count-for-${category}` : `burger-book-count-for-${category}`;

  const onCategoryClick = () => dispatch(displayingContentActions.setBurgerMenuOpen());

  return (
    <СategoryItemStyled onClick={onCategoryClick}>
      <NavLinkStyled to={`/books/${path}`}>
        <NavText data-test-id={dataTestIdCategory}>{name}</NavText>
        <Qty data-test-id={dataTestIdCount}>{quantity}</Qty>
      </NavLinkStyled>
    </СategoryItemStyled>
  );
};

export default memo(СategoryItem);
