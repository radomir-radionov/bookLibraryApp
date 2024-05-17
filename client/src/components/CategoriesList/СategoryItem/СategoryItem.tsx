import { Dispatch, SetStateAction, memo } from 'react';
import { useDispatch } from 'react-redux';
import { TExtendedCategory } from 'types/categories';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { NavLinkStyled, Name, Qty, СategoryItemStyled } from './styles';

type TProps = {
  data: TExtendedCategory;
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const СategoryItem = ({ data, isBurgerMenuOpen, setIsBurgerMenuOpen }: TProps) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const { name, path, quantity } = data;
  let category = path === 'all' ? 'books' : path;
  const dataTestIdCategory = width > 1024 ? `navigation-${category}` : `burger-${category}`;
  const dataTestIdCount = width > 1024 ? `navigation-book-count-for-${category}` : `burger-book-count-for-${category}`;

  const onCategoryClick = () => !!setIsBurgerMenuOpen && setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <СategoryItemStyled onClick={onCategoryClick}>
      <NavLinkStyled to={`/books/${path}`}>
        <Name data-test-id={dataTestIdCategory}>{name}</Name>
        <Qty data-test-id={dataTestIdCount}>{quantity}</Qty>
      </NavLinkStyled>
    </СategoryItemStyled>
  );
};

export default memo(СategoryItem);
