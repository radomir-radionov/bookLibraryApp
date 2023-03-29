import { ReactNode } from 'react';

import { SubTitleStyled } from './styles';

type SubTitleProps = {
  children: ReactNode;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return <SubTitleStyled>{children}</SubTitleStyled>;
};

export default SubTitle;
