const paths = {
  authPaths: {
    register: '/api/auth/local/register',
    auth: '/api/auth/local',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
  },
  userPaths: {
    user: '/api/user',
    userId: '/api/user/:id',
  },
  bookPaths: {
    book: '/api/book',
    bookId: '/api/book/:id',
  },
  categoryPaths: {
    category: '/api/category',
  },
}

export default paths
