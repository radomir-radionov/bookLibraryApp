import { Outlet } from 'react-router-dom';
import { Nav } from 'modules';
import useWindowDimensions from 'utils/useWindowDimensions';

import dataTestIds from './data';
import { Content, LayoutHomeStyled } from './styles';

const LayoutHome = () => {
  const { width } = useWindowDimensions();

  return (
    <LayoutHomeStyled>
      <Content>
        {width > 1024 && <Nav dataTestIds={dataTestIds} />}
        <Outlet />
      </Content>
    </LayoutHomeStyled>
  );
};

export default LayoutHome;
