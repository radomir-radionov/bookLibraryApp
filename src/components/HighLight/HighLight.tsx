import dataTestId from 'constants/dataTestId';

import { ReactNode } from 'react';

import { HighLightStyled, Mark } from './styles';

type TProps = {
  text?: string;
  searcheText?: string;
};

type HighlightTagProps = {
  children: ReactNode;
  highlightIndex: number;
};

const HighLight = ({ text, searcheText }: TProps) => {
  const highlightTag = ({ children, highlightIndex, ...props }: HighlightTagProps) => {
    return (
      <Mark data-highlightindex={highlightIndex} {...props} data-test-id={dataTestId.HIGHTLIGHT_MATCHES}>
        <span>{children}</span>
      </Mark>
    );
  };

  return (
    <HighLightStyled
      highlightClassName='highlight'
      searchWords={[searcheText]}
      autoEscape={true}
      textToHighlight={text}
      highlightTag={highlightTag}
    />
  );
};

export default HighLight;
