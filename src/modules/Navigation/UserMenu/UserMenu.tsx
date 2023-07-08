import dataTestId from 'constants/dataTestId';
import pageRoutes from 'constants/pageRoutes';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayingContentActions } from 'redux/displayingContent';
import { userActions } from 'redux/user';

import { Item, List } from './styles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBtnExitClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
    dispatch(userActions.clearUser());
    navigate(pageRoutes.AUTH);
  };

  const onBtnProfileClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
    dispatch(userActions.getUser());
    navigate(pageRoutes.PROFILE);
  };

  return (
    <List>
      <Item onClick={onBtnProfileClick} data-test-id={dataTestId.BUTTON_PROFILE}>
        Профиль
      </Item>
      <Item onClick={onBtnExitClick} data-test-id={dataTestId.EXIT_BUTTON}>
        Выход
      </Item>
    </List>
  );
};

export default UserMenu;
