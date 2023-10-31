enum serverEndpoints {
  API_URL = 'http://localhost:5000/',

  BOOKS = 'api/book',
  CATEGORIES = `api/category`,

  REGISTRATION_URL = `api/auth/registration`,
  LOGIN_URL = `api/auth/login`,
  LOGOUT_URL = `api/auth/logout`,
  REFRESH_URL = `api/auth/refresh`,

  FORGOT_PWD = '/api/auth/forgot-password',
  RESET_PWD = '/api/auth/reset-password',

  COMMENTS = '/api/comments',
  BOOKINGS = '/api/bookings',

  USER = '/api/users',
}

export default serverEndpoints;
