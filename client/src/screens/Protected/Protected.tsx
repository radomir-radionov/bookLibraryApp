import pageRoutes from 'constants/pageRoutes';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from 'redux/user/selectors';

const Protected = () => {
  const isAuth = useSelector(selectAuth);

  return isAuth ? <Outlet /> : <Navigate to={pageRoutes.AUTH} />;
};

export default Protected;
