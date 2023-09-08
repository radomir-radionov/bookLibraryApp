import pageRoutes from 'constants/pageRoutes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';
import { userActions } from 'redux/user/slice.js';

const Protected = () => {
  const dispatch = useDispatch();
  const [ignore, setIgnore] = useState(false);

  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('userData') || 'null');

    if (jwt && ignore) {
      dispatch(userActions.setJwt({ jwt }));
      dispatch(userActions.setUserData(user));
    }

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  return jwt ? <Outlet /> : <Navigate to={pageRoutes.AUTH} />;
};

export default Protected;
