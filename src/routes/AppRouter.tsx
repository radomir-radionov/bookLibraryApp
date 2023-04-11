import pageRoutes from 'constants/pageRoutes';

import { Route, Routes } from 'react-router-dom';
import Home from 'screens/Home/Home';

function AppRouter() {
  return (
    <Routes>
      <Route path={pageRoutes.HOME} element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
