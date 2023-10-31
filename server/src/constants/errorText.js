const errorText = {
  INTERNAL_SERVER_ERROR: 'Internal server error!',
  // User
  INVALID_BOOK: 'Book not found!',
  EXSITED_USER: 'User already exists',
  USER_NOT_FOUND: 'User not found!',
  CREATE_USER_ERROR: 'Failed to create user!',
  UNAUTHORIZED_USER: 'User not authorized',
  LOGIN_WRONG_DATA:
    'Unauthorized: Access is denied due to invalid credentials. Please log in with valid credentials to continue!',
  TOKEN_IS_REQUIRED: 'Unauthorized. Token is required.',
  // Comment
  COMMENT_NOT_FOUND: 'Comment not found!',
  CREATE_COMMENT_ERROR: 'Failed to create comment!',
  UPDATE_COMMENT_ERROR: 'Failed to update comment!',
  // Booking
  CREATE_BOOKING_ERROR: 'Failed to create booking!',
  BOOK_ALREADY_BOOKED: 'Book already booked!',
  USER_LIMIT_BOOKING: "User's booking limit exceeded!",
  BOOKING_DELETE_ERROR: 'Booking deletion failed!',
  EXPIRED_BOOKING_DELETE_ERROR: 'Expired booking deletion failed!',
  // Delivery
  CREATE_DELIVERY_ERROR: 'Failed to create delivery!',
  USER_LIMIT_DELIVERY: "User's delivery limit exceeded!",
  BOOK_ALREADY_DELIVERED: 'Book already  delivered!',
  DELIVERY_DELETE_ERROR: 'Delivery deletion failed!',
  // Avatar
  CREATE_AVATAR_ERROR: 'Failed to create avatar!',
  UPLOAD_AVATAR_SUCCESS: 'Avatar uploaded successfully!',
  UPLOAD_AVATAR_ERROR: 'Failed to upload avatar!',
  NO_FILE: 'No avatar file uploaded',
};

export default errorText;
