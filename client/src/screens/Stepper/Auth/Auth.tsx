import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { selectStep } from 'redux/auth/selectors';
import { AuthStep, FailedAuthStep } from 'modules/Modals';

import { Container, Name, Wrapper } from './styles';

const Auth = () => {
  const step = useSelector(selectStep);
  console.log(1);
  const getStepToRender = () => {
    switch (true) {
      case step === 1:
        return <AuthStep />;
      case step === 2:
        return <FailedAuthStep />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Container data-test-id={dataTestId.AUTH}>
        <Name>Cleverland</Name>
        {getStepToRender()}
      </Container>
    </Wrapper>
  );
};

export default Auth;
