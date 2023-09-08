enum serverEndpoints {
  HOST = 'http://localhost:5000/',

  BOOKS = 'api/book',
  CATEGORIES = `api/category`,

  REGISTRATION = `api/auth/local/register`,
  AUTHORIZATION = `api/auth/local`,
  FORGOT_PWD = '/api/auth/forgot-password',
  RESET_PWD = '/api/auth/reset-password',

  COMMENTS = '/api/comments',
  BOOKINGS = '/api/bookings',

  USER = '/api/users',
}

export default serverEndpoints;
