import dataTestId from 'constants/dataTestId';

import { ButtonBooking, SubTitle } from 'components';
import { SliderPagination, SliderScrollbar } from 'modules';
import { TBookDetailed } from 'types/book';
import useWindowDimensions from 'utils/useWindowDimensions';

import {
  About,
  Author,
  CatIcon,
  Description,
  Header,
  ImgBox,
  ImgContainer,
  Info,
  NameBook,
  Paragraph,
  SliderWrapper,
  Title,
} from './styles';

type TProps = {
  data: TBookDetailed;
};

const AboutBook = ({ data }: TProps) => {
  const { width } = useWindowDimensions();
  const { title, authors, issueYear, description, image } = data;

  return (
    <About>
      {image ? (
        <SliderWrapper>
          {
            //   width > 1024 ? <SliderScrollbar img={`http://localhost:5000/${image}`} /> : null
            <SliderScrollbar img={`http://localhost:5000/${image}`} />
            //   <SliderPagination imgs={image} />
          }
        </SliderWrapper>
      ) : (
        <ImgContainer>
          <ImgBox>
            <CatIcon />
          </ImgBox>
        </ImgContainer>
      )}
      <Info>
        <Header>
          <NameBook>
            <Title data-test-id={dataTestId.BOOK_TITLE}>{title}</Title>
            <Author>
              {authors?.map((author) => author)}, {issueYear}
            </Author>
          </NameBook>
          <ButtonBooking onlyBookData={true} book={data} />
        </Header>
        <Description>
          <SubTitle>О книге</SubTitle>
          <Paragraph>{description}</Paragraph>
        </Description>
      </Info>
    </About>
  );
};

export default AboutBook;
