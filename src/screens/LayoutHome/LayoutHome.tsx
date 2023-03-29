import { Outlet } from 'react-router-dom';
import { Menu } from 'modules';
import useWindowDimensions from 'utils/useWindowDimensions';

import dataTestIds from './data';
import { LayoutHomeStyled } from './styles';

const LayoutHome = () => {
  const { width } = useWindowDimensions();

  return (
    <LayoutHomeStyled>
      {width > 1024 && <Menu dataTestIds={dataTestIds} />}
      <Outlet />
    </LayoutHomeStyled>
  );
};

export default LayoutHome;
