import dataTestId from 'constants/dataTestId';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { isBurgerMenuOpen } from 'redux/displayingContent/selectors';
import { Nav, UserMenu } from 'modules';
import useOnClickOutside from 'utils/useOutsideClick';
import useWindowDimensions from 'utils/useWindowDimensions';

import dataTestIds from './data';
import { BurgerMenuStyled, BurgerNav, CloseMenuIcon, HumburgerIcon, MenuWrapper } from './styles';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(isBurgerMenuOpen);
  const squareBoxRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const onBurgerMenuClick = () => dispatch(displayingContentActions.setBurgerMenuOpen());
  const onOutsideClick = () => isMenuOpen && dispatch(displayingContentActions.closeBurgerMenu());

  useOnClickOutside(squareBoxRef, onOutsideClick);

  return (
    <BurgerMenuStyled data-test-id={dataTestId.BUTTON_BURGER}>
      {isMenuOpen ? <CloseMenuIcon onClick={onBurgerMenuClick} /> : <HumburgerIcon onClick={onBurgerMenuClick} />}
      <BurgerNav ref={squareBoxRef} $visible={isMenuOpen} data-test-id={dataTestId.BURGER_NAVIGATION}>
        <MenuWrapper>{width < 1024 && <Nav visible={true} />}</MenuWrapper>
        <UserMenu />
      </BurgerNav>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
