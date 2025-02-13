import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { enteredBookName } from 'redux/user/selectors';
import { ButtonBooking, HighLight, RatingList } from 'components';
import { TBook } from 'types/book';

import { Author, BookItemStyled, CatIcon, Img, ImgBox, Info, NameBox, SubTitleWrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

type TProps = {
  data: TBook;
};

const BookShort = ({ data }: TProps) => {
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { category } = useParams();
  const { id, title, authors, rating, issueYear, image } = data;

  const correctedCategory = category ? category : 'all';
  const onNavigateClick = () => navigate(`/books/${correctedCategory}/${id}`);

  return (
    <BookItemStyled onClick={onNavigateClick} data-test-id={dataTestId.CARD}>
      {image ? (
        <Img src={`http://localhost:8080/${image}`} alt='Book cover' width='174' height='242' />
      ) : (
        <ImgBox>
          <CatIcon />
        </ImgBox>
      )}
      <Info>
        <RatingList rating={rating} />
        <NameBox>
          <SubTitleWrapper>
            <HighLight text={title} searcheText={enteredText} />
          </SubTitleWrapper>
          <Author>
            {authors?.map((author) => author)}, {issueYear}
          </Author>
        </NameBox>
        <ButtonBooking book={data} />
      </Info>
    </BookItemStyled>
  );
};

export default BookShort;
