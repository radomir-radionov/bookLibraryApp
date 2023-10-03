import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { selectStep } from 'redux/registration/selectors';
import { Loader } from 'components';
import { ContactsStep, FailedDataStep, FailedStep, LoginStep, NameStep, SuccessfulStep } from 'modules/Modals';

import { Container, Title, Wrapper } from './styles';

const Registration = () => {
  const step = useSelector(selectStep);

  const getStepToRender = () => {
    switch (true) {
      case step === 1:
        return <LoginStep />;
      case step === 2:
        return <NameStep />;
      case step === 3:
        return <ContactsStep />;
      case step === 4:
        return <SuccessfulStep />;
      case step === 5:
        return <FailedStep />;
      case step === 6:
        return <FailedDataStep />;
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
    </Wrapper>
  );
};

export default Registration;
