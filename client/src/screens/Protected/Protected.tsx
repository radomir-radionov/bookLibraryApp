import pageRoutes from 'constants/pageRoutes';

import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const jwt = localStorage.getItem('jwt');

  return jwt ? <Outlet /> : <Navigate to={pageRoutes.AUTH} />;
};

export default Protected;
