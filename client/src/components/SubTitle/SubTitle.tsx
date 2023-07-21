import { ReactNode } from 'react';

import { SubTitleStyled } from './styles';

type TProps = {
  children: ReactNode;
};

const SubTitle = ({ children }: TProps) => <SubTitleStyled>{children}</SubTitleStyled>;

export default SubTitle;
