import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';

import { MenuItem, NavLinkStyled, UserMenuStyled } from './styles';
import { Dispatch, SetStateAction } from 'react';

type TUserMenu = {
  setIsBurgerMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

const UserMenu = ({ setIsBurgerMenuOpen }: TUserMenu) => {
  const dispatch = useDispatch();

  const onBtnExitClick = () => {
    setIsBurgerMenuOpen && setIsBurgerMenuOpen(false);
    dispatch(userActions.clearUser());
  };

  const onBtnProfileClick = () => {
    setIsBurgerMenuOpen && setIsBurgerMenuOpen(false);
    dispatch(userActions.getUser());
  };

  return (
    <UserMenuStyled>
      <MenuItem onClick={onBtnProfileClick} data-test-id={dataTestId.BUTTON_PROFILE}>
        <NavLinkStyled to={pageRoutes.PROFILE}>Профиль</NavLinkStyled>
      </MenuItem>
      <MenuItem onClick={onBtnExitClick} data-test-id={dataTestId.EXIT_BUTTON}>
        <NavLinkStyled to={pageRoutes.AUTH}>Выход</NavLinkStyled>
      </MenuItem>
    </UserMenuStyled>
  );
};

export default UserMenu;
