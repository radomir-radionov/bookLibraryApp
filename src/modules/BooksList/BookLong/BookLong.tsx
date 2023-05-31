import serverEndpoints from 'constants/apiEndpoints';
import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { enteredBookName } from 'redux/user/selectors';
import { ButtonToBook, HighLight, RatingList } from 'components';
import { BookProps } from 'types/book';

import {
  Active,
  Author,
  BookItemStyled,
  CatIcon,
  Img,
  ImgBox,
  ImgWrapper,
  Info,
  NameBox,
  SubTitleWrapper,
} from './styles';

type BookLongProps = {
  data: BookProps;
};

const BookLong = ({ data }: BookLongProps) => {
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { category } = useParams();

  const { id, title, authors, rating, issueYear, booking, delivery, image } = data;
  const imgSrc = `${image?.url}`;

  const clickNavigateToBook = () => navigate(`/books/${category}/${id}`);

  return (
    <BookItemStyled onClick={clickNavigateToBook} data-test-id={dataTestId.CARD}>
      <ImgWrapper>
        {imgSrc ? (
          <Img src={imgSrc} alt='Book cover' />
        ) : (
          <ImgBox>
            <CatIcon />
          </ImgBox>
        )}
      </ImgWrapper>
      <Info>
        <NameBox>
          <SubTitleWrapper>
            <HighLight text={title} searcheText={enteredText} />
          </SubTitleWrapper>
          <Author>
            {authors?.map((author) => {
              return author;
            })}
            , {issueYear}
          </Author>
        </NameBox>
        <Active>
          <RatingList rating={rating} />
          <ButtonToBook book={data} booking={booking} delivery={delivery} />
        </Active>
      </Info>
    </BookItemStyled>
  );
};

export default BookLong;
