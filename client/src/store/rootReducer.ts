import { authReducer } from 'redux/auth';
import { bookReducer } from 'redux/book';
import { bookingReducer } from 'redux/booking';
import { booksReducer } from 'redux/books';
import { categoriesReducer } from 'redux/categories';
import { displayingContentReducer } from 'redux/displayingContent';
import { forgotPwdReducer } from 'redux/forgotPwd';
import { modalReducer } from 'redux/modal';
import { registrationReducer } from 'redux/registration';
import { toastReducer } from 'redux/toast';
import { userReducer } from 'redux/user';

const rootReducer = {
  auth: authReducer,
  registration: registrationReducer,
  forgotPwd: forgotPwdReducer,
  user: userReducer,
  books: booksReducer,
  book: bookReducer,
  categories: categoriesReducer,
  booking: bookingReducer,
  displayingContent: displayingContentReducer,
  modal: modalReducer,
  toast: toastReducer,
};

export default rootReducer;
