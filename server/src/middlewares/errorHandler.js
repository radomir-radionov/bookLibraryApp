const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || 500
    ctx.body = {
      data: null,
      error: {
        status: ctx.status,
        message: error.message || 'Internal Server Error',
      },
    }
  }
}

export default errorHandler
