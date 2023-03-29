enum serverEndpoints {
  HOST = 'https://strapi.cleverland.by',

  BOOKS = '/api/books',
  CATEGORIES = '/api/categories',

  REGISTRATION = '/api/auth/local/register',
  AUTHORIZATION = '/api/auth/local',
  FORGOT_PWD = '/api/auth/forgot-password',
  RESET_PWD = '/api/auth/reset-password',

  COMMENTS = '/api/comments',
  BOOKINGS = '/api/bookings',

  USER = '/api/users/me',
  EDIT_USER_DATA = '/api/users',
  UPLOAD_AVATAR = '/api/upload',
  UPLOAD_AVATAR_BY_ID = '/api/users',
}

export default serverEndpoints;
