import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Outlet, useSearchParams } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { forgotPwdActions } from 'redux/forgotPwd';
import { selectAuth } from 'redux/user/selectors';
import { Auth, ForgotPwd } from 'screens';

const Protected = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const [ignore, setIgnore] = useState(false);

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (ignore && localStorage.getItem('token')) dispatch(authActions.checkAuth());

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  if (code?.length) {
    dispatch(forgotPwdActions.setDefiniteStep(3));
    return <ForgotPwd />;
  }

  if (!isAuth) return <Auth />;

  return <Outlet />;
};

export default Protected;
