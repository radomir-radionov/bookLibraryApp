import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useDispatch } from 'react-redux';
import { displayingContentActions } from 'redux/displayingContent';
import { userActions } from 'redux/user';

import { MenuItem, NavLinkStyled, UserMenuStyled } from './styles';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onBtnExitClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
    dispatch(userActions.clearUser());
  };

  const onBtnProfileClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
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
