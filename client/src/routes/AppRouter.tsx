import pageRoutes from 'constants/pageRoutes';

import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Auth,
  AuthLayout,
  Book,
  Chat,
  ForgotPwd,
  Home,
  Layout,
  LayoutHome,
  Profile,
  Protected,
  Registration,
  Terms,
} from 'screens';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Protected />}>
        <Route path={pageRoutes.HOME} element={<Layout />}>
          <Route element={<LayoutHome />}>
            <Route path={pageRoutes.HOME} element={<Navigate to={pageRoutes.BOOKS_ALL} />} />
            <Route path={pageRoutes.BOOK_CATEGORY} element={<Home />} />
            <Route path={pageRoutes.CHAT} element={<Chat />} />
            <Route path={pageRoutes.TERMS} element={<Terms contentView='terms' />} />
            <Route path={pageRoutes.CONTRACT} element={<Terms contentView='contract' />} />
          </Route>
          <Route path={pageRoutes.BOOK_DATA} element={<Book />} />
          <Route path={pageRoutes.PROFILE} element={<Profile />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={pageRoutes.AUTH} element={<Auth />} />
        <Route path={pageRoutes.REGISTRATION} element={<Registration />} />
        <Route path={pageRoutes.FORGOT_PWD} element={<ForgotPwd />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
