import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CategoriesList } from 'components';

import { ChevronIcon, NavItem, NavList, NavStyled, NavLinkStyled } from './styles';
import navListData from './data';

type TProps = {
  visible: boolean;
};

const Nav = ({ visible = false }: TProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpenCategoriesList, setIsOpenCategoriesList] = useState(false);

  const pathStartsWithBooks = location.pathname.startsWith('/books');

  const onNavItemClick = (e: React.MouseEvent<HTMLLIElement>) => setActiveIndex(+e.currentTarget.id);
  const onChevronItemClick = () => setIsOpenCategoriesList(!isOpenCategoriesList);

  return (
    <NavStyled $visible={visible}>
      <NavList>
        {navListData.map(({ id, title, link, dataTestId }) =>
          id === 0 ? (
            <NavItem
              key={id}
              id={String(id)}
              onClick={onNavItemClick}
              $isActive={activeIndex === id}
              data-test-id={dataTestId}
            >
              <NavLinkStyled to={link} $pathStartsWithBooks={pathStartsWithBooks}>
                {title}
                <ChevronIcon
                  onClick={onChevronItemClick}
                  $isOpen={isOpenCategoriesList}
                  $pathStartsWithBooks={pathStartsWithBooks}
                />
              </NavLinkStyled>
              {activeIndex === 0 && pathStartsWithBooks && <CategoriesList isOpen={isOpenCategoriesList} />}
            </NavItem>
          ) : (
            <NavItem
              key={id}
              id={String(id)}
              onClick={onNavItemClick}
              $isActive={activeIndex === id}
              data-test-id={dataTestId}
            >
              <NavLinkStyled to={link}>{title}</NavLinkStyled>
            </NavItem>
          )
        )}
      </NavList>
    </NavStyled>
  );
};

export default Nav;
