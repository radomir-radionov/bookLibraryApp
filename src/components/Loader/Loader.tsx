import dataTestId from 'constants/dataTestId';

import { LoaderIcon, LoaderStyled, Wrapper } from './styles';

const Loader = () => {
  return (
    <LoaderStyled data-test-id={dataTestId.LOADER}>
      <Wrapper>
        <LoaderIcon />
      </Wrapper>
    </LoaderStyled>
  );
};

export default Loader;
