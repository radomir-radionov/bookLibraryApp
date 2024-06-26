enum responseText {
  COMMON_ERROR = 'Что-то пошло не так. Попробуйте перезагрузить страницу.',

  BOOKS_ERROR = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  BOOK_ERROR = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  CATEGORIES_ERROR = 'Что-то пошло не так. Обновите страницу через некоторое время.',

  REGISTRATION_DATA_NOT_UNIQ = 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
  REGISTRATION_SMTH_WRONG = 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',

  AUTH_WRONG_DATA = 'Неверный логин или пароль!',
  AUTH_SMTH_WRONG = 'Что-то пошло не так. Попробуйте еще раз',

  FORGOT_PWD_SUCCESS = 'Пароль успешно изменен!',
  FORGOT_PWD_ERROR = 'error',
  FORGOT_PWD_SMTH_WRONG = 'Что-то пошло не так. Попробуйте еще раз',

  COMMENTS_SUCCESS = 'Спасибо, что нашли время оценить книгу!',
  COMMENTS_ERROR = 'Оценка не была отправлена. Попробуйте позже!',

  EDIT_COMMENTS_SUCCESS = 'Спасибо, что нашли время изменить оценку!',
  EDIT_COMMENTS_ERROR = 'Изменения не были сохранены. Попробуйте позже!',

  BOOKING_SUCCESS = 'Книга забронирована. Подробности можно посмотреть на странице Профиль',
  BOOKING_ERROR = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!',

  UPDATE_BOOKING_SUCCESS = 'Изменения успешно сохранены!',
  UPDATE_BOOKING_ERROR = 'Изменения не были сохранены. Попробуйте позже!',

  CANCEL_BOOKING_SUCCESS = 'Бронирование книги успешно отменено!',
  CANCEL_BOOKING_ERROR = 'Не удалось снять бронирование книги. Попробуйте позже!',
  CANCEL_EXPIRED_BOOKING_SUCCESS = 'Истёкшее бронирование книги успешно отменено!',
  CANCEL_EXPIRED_BOOKING_ERROR = 'Не удалось снять истёкшее бронирование книги. Попробуйте позже!',

  UPLOAD_AVATAR_SUCCESS = 'Фото успешно сохранено!',
  UPLOAD_AVATAR_ERROR = 'Что-то пошло не так, фото не сохранилось. Попробуйте позже!',
  USER_AVATAR_ERROR = 'Что-то пошло не так, фото не было получено.',

  EDIT_USER_DATA_SUCCESS = 'Изменения успешно сохранены!',
  EDIT_USER_DATA_ERROR = 'Изменения не были сохранены. Попробуйте позже!',
}

export default responseText;
