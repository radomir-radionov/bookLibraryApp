import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Outlet, useSearchParams } from 'react-router-dom';
import { authActions } from 'redux/auth';
import { selectAuth } from 'redux/user/selectors';
import { Auth } from 'screens';

const Protected = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const [ignore, setIgnore] = useState(false);

  useEffect(() => {
    if (ignore && localStorage.getItem('token')) dispatch(authActions.checkAuth());

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  if (!isAuth) return <Auth />;

  return <Outlet />;
};

export default Protected;
