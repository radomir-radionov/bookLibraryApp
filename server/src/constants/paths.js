const paths = {
  authPaths: {
    register: '/api/auth/local/register',
    auth: '/api/auth/local',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
  },
  userPaths: {
    user: '/api/users',
    userId: '/api/users/:id',
    comments: '/api/comments',
    commentId: '/api/comments/:id',
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
