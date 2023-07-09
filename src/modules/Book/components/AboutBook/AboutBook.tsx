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
  const { title, authors, issueYear, description, images, booking, delivery } = data;

  return (
    <About>
      {images ? (
        <SliderWrapper>
          {width > 1024 ? <SliderScrollbar imgs={images} /> : <SliderPagination imgs={images} />}
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
          <ButtonBooking book={data} booking={booking} delivery={delivery} />
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
