import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useDispatch } from 'react-redux';

import { MenuItem, NavLinkStyled, UserMenuStyled } from './styles';
import { Dispatch, SetStateAction } from 'react';
import { authActions } from 'redux/auth';

type TUserMenu = {
  setIsBurgerMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

const UserMenu = ({ setIsBurgerMenuOpen }: TUserMenu) => {
  const dispatch = useDispatch();

  const onBtnExitClick = () => {
    !!setIsBurgerMenuOpen && setIsBurgerMenuOpen(false);
    dispatch(authActions.postLogout());
  };

  const onBtnProfileClick = () => !!setIsBurgerMenuOpen && setIsBurgerMenuOpen(false);
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
