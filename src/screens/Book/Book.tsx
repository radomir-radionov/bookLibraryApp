import { useSelector } from 'react-redux';
import { bookDataState } from 'redux/book/selectors';
import { Breadcrumbs } from 'components';
import { BookInfo } from 'modules';

import { Wrapper } from './styles';

const Book = () => {
  const bookData = useSelector(bookDataState);

  return (
    <Wrapper>
      <Breadcrumbs title={bookData.book.title} />
      <BookInfo />
    </Wrapper>
  );
};

export default Book;
