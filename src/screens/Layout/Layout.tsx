import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsBookLoading } from 'redux/book/selectors';
import { selectIsLoadingBooking } from 'redux/booking/selectors';
import { booksActions } from 'redux/books';
import { selectIsBooksLoading } from 'redux/books/selectors';
import { categoriesActions } from 'redux/categories';
import { selectCategoriesLoading } from 'redux/categories/selectors';
import { selectIsLoading } from 'redux/user/selectors';
import { Loader, Toast } from 'components';
import { Footer, Header } from 'modules';

import { LayoutStyled } from './styles';

const Layout = () => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsLoading);
  const isBookLoadingValue = useSelector(selectIsBookLoading);
  const isCategoriesLoading = useSelector(selectCategoriesLoading);
  const isBooksLoading = useSelector(selectIsBooksLoading);
  const isLoadingBooking = useSelector(selectIsLoadingBooking);
  const [ignore, setIgnore] = useState(false);

  const isLoading = isUserLoading || isCategoriesLoading || isBooksLoading || isBookLoadingValue || isLoadingBooking;

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
      <Toast />
      <div hidden={!isLoading}>
        <Loader />
      </div>
    </LayoutStyled>
  );
};

export default Layout;
