import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'modules';

import { LayoutStyled } from './styles';

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
