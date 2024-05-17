import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/selectors';
import { selectCategories } from 'redux/categories/selectors';
import { BookList, Menu } from 'modules';

import { HomeStyled } from './styles';
import { useEffect, useState } from 'react';
import { booksActions } from 'redux/books';
import { categoriesActions } from 'redux/categories';

const Home = () => {
  const [ignore, setIgnore] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    if (ignore) {
      dispatch(booksActions.getBooks());
      dispatch(categoriesActions.getCategories());
    }

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  return (
    <HomeStyled data-test-id={dataTestId.MAIN_PAGE}>
      <Menu />
      <BookList books={books} categories={categories} />
    </HomeStyled>
  );
};

export default Home;
