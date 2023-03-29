import dataTestId from 'constants/dataTestId';

import { ExpiredMaskStyled, Subtitle, Title } from './styles';

type ExpiredMaskProps = {
  title: string;
  subtitle: string;
};

const ExpiredMask = ({ title, subtitle }: ExpiredMaskProps) => {
  return (
    <ExpiredMaskStyled data-test-id={dataTestId.EXPIRED}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ExpiredMaskStyled>
  );
};

export default ExpiredMask;
