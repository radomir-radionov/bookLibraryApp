import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { selectIsLoading, selectStep } from 'redux/forgotPwd/selectors';
import { Loader } from 'components';
import { EmailStep, FailedPwdStep, LetterStep, NewPwdStep, SuccessfulPwdStep } from 'modules/Modals';

import { Container, Title, Wrapper } from './styles';

const ForgotPwd = () => {
  const step = useSelector(selectStep);
  const isLoading = useSelector(selectIsLoading);

  const getStepToRender = () => {
    switch (true) {
      case step === 1:
        return <EmailStep />;
      case step === 2:
        return <LetterStep />;
      case step === 3:
        return <NewPwdStep />;
      case step === 4:
        return <SuccessfulPwdStep />;
      case step === 5:
        return <FailedPwdStep />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Container data-test-id={dataTestId.AUTH}>
        <Title>Cleverland</Title>
        {getStepToRender()}
      </Container>
      <div hidden={!isLoading}>
        <Loader />
      </div>
    </Wrapper>
  );
};

export default ForgotPwd;
