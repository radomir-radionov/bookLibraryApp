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

  const handleExitClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
    dispatch(userActions.clearUser());
    navigate(pageRoutes.AUTH);
  };

  const handleNavigateClick = () => {
    dispatch(displayingContentActions.closeBurgerMenu());
    dispatch(userActions.getUser());
    navigate(pageRoutes.PROFILE);
  };

  return (
    <List>
      <Item onClick={handleNavigateClick} data-test-id={dataTestId.BUTTON_PROFILE}>
        Профиль
      </Item>
      <Item onClick={handleExitClick} data-test-id={dataTestId.EXIT_BUTTON}>
        Выход
      </Item>
    </List>
  );
};

export default UserMenu;
