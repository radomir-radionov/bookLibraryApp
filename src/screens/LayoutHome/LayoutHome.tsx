import { Outlet } from 'react-router-dom';
import { Menu } from 'modules';
import useWindowDimensions from 'utils/useWindowDimensions';

import dataTestIds from './data';
import { Content, LayoutHomeStyled } from './styles';

const LayoutHome = () => {
  const { width } = useWindowDimensions();

  return (
    <LayoutHomeStyled>
      <Content>
        {width > 1024 && <Menu dataTestIds={dataTestIds} />}
        <Outlet />
      </Content>
    </LayoutHomeStyled>
  );
};

export default LayoutHome;
