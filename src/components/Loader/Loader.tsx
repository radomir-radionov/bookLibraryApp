import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { selectIsBookLoading } from 'redux/book/selectors';
import { selectIsLoadingBooking } from 'redux/booking/selectors';
import { selectIsBooksLoading } from 'redux/books/selectors';
import { selectCategoriesLoading } from 'redux/categories/selectors';
import { selectIsLoading } from 'redux/user/selectors';

import { LoaderIcon, LoaderStyled } from './styles';

const Loader = () => {
  const isUserLoading = useSelector(selectIsLoading);
  const isBookLoading = useSelector(selectIsBookLoading);
  const isCategoriesLoading = useSelector(selectCategoriesLoading);
  const isBooksLoading = useSelector(selectIsBooksLoading);
  const isLoadingBooking = useSelector(selectIsLoadingBooking);

  const isLoading = isUserLoading || isCategoriesLoading || isBooksLoading || isBookLoading || isLoadingBooking;

  return (
    <LoaderStyled $visibility={isLoading} data-test-id={dataTestId.LOADER}>
      <LoaderIcon />
    </LoaderStyled>
  );
};

export default Loader;
