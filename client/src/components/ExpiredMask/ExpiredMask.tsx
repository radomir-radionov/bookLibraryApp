import dataTestId from 'constants/dataTestId';

import { ExpiredMaskStyled, Subtitle, Title } from './styles';

type TProps = {
  title: string;
  subtitle: string;
};

const ExpiredMask = ({ title, subtitle }: TProps) => {
  return (
    <ExpiredMaskStyled data-test-id={dataTestId.EXPIRED}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ExpiredMaskStyled>
  );
};

export default ExpiredMask;
