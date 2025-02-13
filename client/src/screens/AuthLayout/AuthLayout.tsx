import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

import pageRoutes from 'constants/pageRoutes';
import { forgotPwdActions } from 'redux/forgotPwd';
import { selectAuth } from 'redux/user/selectors';

const ProtectedAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  if (code?.length) {
    dispatch(forgotPwdActions.setDefiniteStep(3));
    <Navigate to={pageRoutes.FORGOT_PWD} />;
  }

  return isAuth ? <Navigate to={pageRoutes.BOOKS_ALL} /> : <Outlet />;
};

export default ProtectedAuth;
