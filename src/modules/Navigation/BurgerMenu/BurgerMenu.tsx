import dataTestId from 'constants/dataTestId';

import { useRef, useState } from 'react';
import { Nav, UserMenu } from 'modules';
import useOnClickOutside from 'utils/useOutsideClick';
import useWindowDimensions from 'utils/useWindowDimensions';

import { BurgerMenuStyled, BurgerNav, CloseMenuIcon, HumburgerIcon, MenuWrapper } from './styles';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const squareBoxRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const onBurgerMenuClick = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const onOutsideClick = () => isBurgerMenuOpen && setIsBurgerMenuOpen(false);

  useOnClickOutside(squareBoxRef, onOutsideClick);

  return (
    <BurgerMenuStyled data-test-id={dataTestId.BUTTON_BURGER}>
      {isBurgerMenuOpen ? <CloseMenuIcon onClick={onBurgerMenuClick} /> : <HumburgerIcon onClick={onBurgerMenuClick} />}
      <BurgerNav ref={squareBoxRef} $visible={isBurgerMenuOpen} data-test-id={dataTestId.BURGER_NAVIGATION}>
        <MenuWrapper>
          {width < 1024 && (
            <Nav visible={true} isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
          )}
        </MenuWrapper>
        <UserMenu />
      </BurgerNav>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
