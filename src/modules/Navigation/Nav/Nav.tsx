import pageRoutes from 'constants/pageRoutes';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { displayingContentActions } from 'redux/displayingContent';
import { CategoriesList } from 'components';

import { ChevronIcon, Line, NavItem, NavList, NavStyled, Name, NavLinkStyled } from './styles';

type TProps = {
  visible?: boolean;
  dataTestIds: Array<{ id: string }>;
};

const Nav = ({ visible = false, dataTestIds }: TProps) => {
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
    <NavStyled $visible={visible}>
      <NavList>
        <NavItem
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
        </NavItem>
        <CategoriesList isOpen={isBooksList} />
        <NavItem onClick={clickCloseList} data-test-id={dataTestIds[2].id}>
          <NavLinkStyled to={pageRoutes.TERMS}>
            Правила пользования
            <Line />
          </NavLinkStyled>
        </NavItem>
        <NavItem onClick={clickCloseList} data-test-id={dataTestIds[3].id}>
          <NavLinkStyled to={pageRoutes.CONTRACT}>
            Договор оферты
            <Line />
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </NavStyled>
  );
};

export default Nav;
