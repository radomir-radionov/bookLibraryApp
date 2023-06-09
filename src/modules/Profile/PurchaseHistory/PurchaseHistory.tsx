import dataTestId from 'constants/dataTestId';
import hintText from 'constants/hintText';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/selectors';
import { BookShort } from 'modules';
import { EmptyData } from 'modules/Profile';
import { Pagination } from 'swiper';
import { TBook } from 'types/book';
import { TUserData } from 'types/user';

import { breakpoints } from './data';
import { Text, Header, PurchaseHistoryStyled, SwiperSlideStyled, SwiperStyled, Title } from './styles';

type TProps = {
  data: TUserData;
};

const PurchaseHistory = ({ data }: TProps) => {
  const allBooks = useSelector(selectBooks);
  const [historyBooks, setHistoryBook] = useState<TBook[]>([]);
  const { history } = data;

  const books = history?.books;

  useEffect(() => {
    books && setHistoryBook(books.map((book) => allBooks?.find(({ id }) => book.id === id)) as TBook[]);
  }, [allBooks]);

  return (
    <PurchaseHistoryStyled data-test-id={dataTestId.HISTORY}>
      <Header>
        <Title>История</Title>
        <Text>Список прочитанных книг</Text>
      </Header>
      {books && books?.length ? (
        <SwiperStyled
          breakpoints={breakpoints}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {historyBooks?.map((book) => (
            <SwiperSlideStyled key={book?.id} data-test-id={dataTestId.HISTORY_SLIDE}>
              {book && <BookShort key={book?.id} data={book} view='history' />}
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      ) : (
        <EmptyData text={hintText.PURCHASE_HISTORY_TEXT} />
      )}
    </PurchaseHistoryStyled>
  );
};

export default PurchaseHistory;
