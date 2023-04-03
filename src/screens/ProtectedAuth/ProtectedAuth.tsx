import pageRoutes from 'constants/pageRoutes';

import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { forgotPwdActions } from 'redux/forgotPwd';

const ProtectedAuth = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const jwt = localStorage.getItem('jwt');
  const code = searchParams.get('code');

  if (code?.length) {
    dispatch(forgotPwdActions.setDefiniteStep(3));
    <Navigate to={pageRoutes.FORGOT_PWD} />;
  }

  return jwt ? <Navigate to={pageRoutes.BOOKS_ALL} /> : <Outlet />;
};

export default ProtectedAuth;
