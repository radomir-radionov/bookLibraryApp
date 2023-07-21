import { useSelector } from 'react-redux';
import { bookDataState } from 'redux/book/selectors';
import { Breadcrumbs } from 'components';
import { BookInfo } from 'modules';

import { BookStyled } from './styles';

const Book = () => {
  const bookData = useSelector(bookDataState);

  return (
    <BookStyled>
      <Breadcrumbs title={bookData.book.title} />
      <BookInfo />
    </BookStyled>
  );
};

export default Book;
