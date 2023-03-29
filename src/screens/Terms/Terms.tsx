import termsData from './data';
import { Chapter, Paragraph, SubChapter, SubTitle, TermsStyled, Title, TwiceSubChapter } from './styles';

type TermsProps = {
  contentView: string;
};

const Terms = ({ contentView }: TermsProps) => {
  return (
    <TermsStyled>
      {contentView && (
        <>
          <Title>{contentView === 'terms' ? termsData.title : termsData.title2}</Title>
          <SubTitle>{termsData.one}</SubTitle>
          <Chapter>
            <Paragraph>{termsData.oneDote1}</Paragraph>
            <Paragraph>{termsData.oneDote2}</Paragraph>
            <Paragraph>{termsData.oneDote3}</Paragraph>
            <Paragraph>{termsData.oneDote4}</Paragraph>
          </Chapter>
          <SubTitle>{termsData.two}</SubTitle>
          <Chapter>
            <Paragraph>{termsData.twoDote1}</Paragraph>
            <SubChapter>
              <Paragraph>{termsData.twoDote1Dote1}</Paragraph>
              <Paragraph>{termsData.twoDote1Dote2}</Paragraph>
            </SubChapter>
            <Paragraph>{termsData.twoDote2}</Paragraph>
          </Chapter>
          <SubTitle>{termsData.three}</SubTitle>
          <Chapter>
            <Paragraph>{termsData.threeDote1}</Paragraph>
            <SubChapter>
              <Paragraph>{termsData.threeDote1Dote1}</Paragraph>
              <Paragraph>{termsData.threeDote1Dote2}</Paragraph>
            </SubChapter>
            <Paragraph>{termsData.threeDote2}</Paragraph>
            <Paragraph>{termsData.threeDote3}</Paragraph>
            <SubChapter>
              <Paragraph>{termsData.threeDote3Dote1}</Paragraph>
              <TwiceSubChapter>
                <Paragraph>{termsData.threeDote3Dote1Dote1}</Paragraph>
                <Paragraph>{termsData.threeDote3Dote1Dote2}</Paragraph>
              </TwiceSubChapter>
            </SubChapter>
            <Paragraph mb='off'>{termsData.threeDote4}</Paragraph>
          </Chapter>
        </>
      )}
    </TermsStyled>
  );
};

export default Terms;
