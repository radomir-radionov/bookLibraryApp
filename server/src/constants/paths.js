const paths = {
  authPaths: {
    registration: '/api/auth/registration',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
  },
  userPaths: {
    user: '/api/users',
    userId: '/api/users/:id',
    updateUserAvatarById: '/api/users/:id/avatar',
    comments: '/api/comments',
    commentId: '/api/comments/:id',
  },
  categoryPaths: {
    category: '/api/category',
  },
  bookPaths: {
    book: '/api/book',
    bookId: '/api/book/:id',
  },
  bookingPaths: {
    bookings: '/api/bookings',
    bookingId: '/api/bookings/:id',
    bookingExpiredId: '/api/bookings/expired/:id',
  },
  deliveryPaths: {
    deliveries: '/api/deliveries',
    deliverieId: '/api/deliveries/:id',
  },
  historyPaths: {
    histories: '/api/histories',
  },
};

export default paths;
