import dataTestId from 'constants/dataTestId';

import { selectIsLoading } from 'redux/user/selectors';
import { useSelector } from 'react-redux';
import { selectIsBookLoading } from 'redux/book/selectors';
import { selectIsLoadingBooking } from 'redux/booking/selectors';
import { selectIsBooksLoading } from 'redux/books/selectors';
import { selectCategoriesLoading } from 'redux/categories/selectors';
import { selectIsForgotPwdLoading } from 'redux/forgotPwd/selectors';
import { selectIsAuthLoading } from 'redux/auth/selectors';
import { selectIsRegistrationLoading } from 'redux/registration/selectors';

import { LoaderIcon, LoaderStyled } from './styles';

const Loader = () => {
  const isUserLoading = useSelector(selectIsLoading);
  const isBookLoading = useSelector(selectIsBookLoading);
  const isCategoriesLoading = useSelector(selectCategoriesLoading);
  const isBooksLoading = useSelector(selectIsBooksLoading);
  const isLoadingBooking = useSelector(selectIsLoadingBooking);
  const isForgotPwdLoading = useSelector(selectIsForgotPwdLoading);
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const isRegistrationLoading = useSelector(selectIsRegistrationLoading);

  const isLoading =
    isUserLoading ||
    isCategoriesLoading ||
    isBooksLoading ||
    isBookLoading ||
    isLoadingBooking ||
    isForgotPwdLoading ||
    isAuthLoading ||
    isRegistrationLoading;

  return (
    <LoaderStyled $visibility={isLoading} data-test-id={dataTestId.LOADER}>
      <LoaderIcon />
    </LoaderStyled>
  );
};

export default Loader;
