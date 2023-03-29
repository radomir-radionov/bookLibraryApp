import dataTestId from 'constants/dataTestId';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { isBurgerMenuOpen } from 'redux/displayingContent/selectors';
import { Menu, UserMenu } from 'modules';
import useOnClickOutside from 'utils/useOutsideClick';
import useWindowDimensions from 'utils/useWindowDimensions';

import dataTestIds from './data';
import { BurgerMenuStyled, BurgerNav, CloseMenuIcon, HumburgerIcon, MenuWrapper } from './styles';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(isBurgerMenuOpen);
  const squareBoxRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const clickIsOpenMenu = () => dispatch(displayingContentActions.setBurgerMenuOpen());
  const clickOutsidehandler = () => isMenuOpen && dispatch(displayingContentActions.closeBurgerMenu());

  useOnClickOutside(squareBoxRef, clickOutsidehandler);

  return (
    <BurgerMenuStyled data-test-id={dataTestId.BUTTON_BURGER}>
      {isMenuOpen ? <CloseMenuIcon onClick={clickIsOpenMenu} /> : <HumburgerIcon onClick={clickIsOpenMenu} />}
      <BurgerNav ref={squareBoxRef} $visible={isMenuOpen} data-test-id={dataTestId.BURGER_NAVIGATION}>
        <MenuWrapper>{width < 1024 && <Menu visible={true} dataTestIds={dataTestIds} />}</MenuWrapper>
        <UserMenu />
      </BurgerNav>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
