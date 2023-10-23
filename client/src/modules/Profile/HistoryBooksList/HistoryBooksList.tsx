import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/selectors';
import { BookShort } from 'modules';
import { EmptyData } from 'modules/Profile';
import { Pagination } from 'swiper';
import { TBook, THistoryBook } from 'types/book';

import { breakpoints } from './data';
import { Text, Header, HistoryBooksListStyled, SwiperSlideStyled, SwiperStyled, Title } from './styles';

type TProps = {
  data: THistoryBook[];
};

const HistoryBooksList = ({ data }: TProps) => {
  const allBooks = useSelector(selectBooks);
  const [historyBooks, setHistoryBook] = useState<TBook[]>([]);

  useEffect(() => {
    data && setHistoryBook(data.map(({ bookId }: THistoryBook) => allBooks.find(({ id }) => bookId === id)) as TBook[]);
  }, [data, allBooks]);

  return (
    <HistoryBooksListStyled data-test-id={dataTestId.HISTORY}>
      <Header>
        <Title>История</Title>
        <Text>Список прочитанных книг</Text>
      </Header>
      {data?.length ? (
        <SwiperStyled breakpoints={breakpoints} modules={[Pagination]} pagination={{ clickable: true }}>
          {historyBooks.map((book: TBook) => (
            <SwiperSlideStyled key={book.id} data-test-id={dataTestId.HISTORY_SLIDE}>
              <BookShort key={book.id} data={book} />
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      ) : (
        <EmptyData text={hintText.PURCHASE_HISTORY_TEXT} />
      )}
    </HistoryBooksListStyled>
  );
};

export default HistoryBooksList;
