import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { booksActions } from 'redux/books';
import { categoriesActions } from 'redux/categories';
import { Footer, Header } from 'modules';

import { LayoutStyled } from './styles';

const Layout = () => {
  const dispatch = useDispatch();

  const [ignore, setIgnore] = useState(false);

  useEffect(() => {
    if (ignore) {
      dispatch(booksActions.getBooks());
      dispatch(categoriesActions.getCategories());
    }

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  return (
    <LayoutStyled>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
