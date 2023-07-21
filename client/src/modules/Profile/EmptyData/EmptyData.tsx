import dataTestId from 'constants/dataTestId';

import { EmptyDataStyled, Text } from './styles';

type TProps = {
  text: string;
};

const EmptyData = ({ text }: TProps) => {
  return (
    <EmptyDataStyled data-test-id={dataTestId.EMPTY_BLUE_CARD}>
      <Text>{text}</Text>
    </EmptyDataStyled>
  );
};

export default EmptyData;
