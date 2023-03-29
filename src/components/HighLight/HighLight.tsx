import dataTestId from 'constants/dataTestId';

import { ReactNode } from 'react';

import { HighLightStyled, Mark } from './styles';

type HighLightProps = {
  text?: string;
  searcheText?: string;
};

type HighlightTagProps = {
  children: ReactNode;
  highlightIndex: number;
};

const HighLight = ({ text, searcheText }: HighLightProps) => {
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
