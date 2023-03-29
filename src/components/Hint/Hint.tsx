import dataTestId from 'constants/dataTestId';

import { ReactNode } from 'react';

import { HintStyled } from './styles';

type HintProps = {
  colored?: boolean;
  children: ReactNode;
};

const Hint = ({ colored = false, children }: HintProps) => {
  return (
    <HintStyled $colored={colored} data-test-id={dataTestId.HINT}>
      {children}
    </HintStyled>
  );
};

export default Hint;
