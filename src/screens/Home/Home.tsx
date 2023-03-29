import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/selectors';
import { selectCategories } from 'redux/categories/selectors';
import { BookList, Navigation } from 'modules';

import { HomeStyled } from './styles';

const Home = () => {
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);

  return (
    <HomeStyled data-test-id={dataTestId.MAIN_PAGE}>
      {books.length > 0 && <Navigation />}
      <BookList books={books} categories={categories} />
    </HomeStyled>
  );
};

export default Home;
