import pageRoutes from 'constants/pageRoutes';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { displayingContentActions } from 'redux/displayingContent';
import { CategoriesList } from 'components';

import { ChevronIcon, Line, MenuItem, MenuList, MenuStyled, Name, NavLinkStyled } from './styles';

type TProps = {
  visible?: boolean;
  dataTestIds: Array<{
    id: string;
  }>;
};

const Menu = ({ visible = false, dataTestIds }: TProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isBooksList, setBooksList] = useState(true);

  const bookParam = location.pathname.split('/')[1];
  const categoryParam = location.pathname.split('/')[2];

  const clickOpenList = () => {
    setBooksList(!isBooksList);
    navigate('/books/all');
  };

  const clickCloseList = () => {
    setBooksList(false);
    dispatch(displayingContentActions.setBurgerMenuOpen());
  };

  return (
    <MenuStyled $visible={visible}>
      <MenuList>
        <MenuItem
          onClick={clickOpenList}
          $bookPath={bookParam}
          $isListOpen={isBooksList}
          $categoryParam={categoryParam}
          data-test-id={dataTestIds[0].id}
        >
          <Name $bookPath={bookParam} $isListOpen={isBooksList}>
            Витрина книг
          </Name>
          <ChevronIcon $categoryParam={categoryParam} />
        </MenuItem>
        <CategoriesList isOpen={isBooksList} />
        <MenuItem onClick={clickCloseList} data-test-id={dataTestIds[2].id}>
          <NavLinkStyled to={pageRoutes.TERMS}>
            Правила пользования
            <Line />
          </NavLinkStyled>
        </MenuItem>
        <MenuItem onClick={clickCloseList} data-test-id={dataTestIds[3].id}>
          <NavLinkStyled to={pageRoutes.CONTRACT}>
            Договор оферты
            <Line />
          </NavLinkStyled>
        </MenuItem>
      </MenuList>
    </MenuStyled>
  );
};

export default Menu;
