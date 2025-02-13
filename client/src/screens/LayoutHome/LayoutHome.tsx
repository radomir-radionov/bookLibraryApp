import { Outlet } from 'react-router-dom';
import { Nav } from 'modules';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { Content, LayoutHomeStyled } from './styles';

const LayoutHome = () => {
  const { width } = useWindowDimensions();

  return (
    <LayoutHomeStyled>
      <Content>
        {width > 1024 && <Nav />}
        <Outlet />
      </Content>
    </LayoutHomeStyled>
  );
};

export default LayoutHome;
