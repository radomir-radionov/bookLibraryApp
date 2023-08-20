const errorMiddleware = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = error.status || 500
    ctx.body = {
      data: null,
      error: {
        status: ctx.status,
        message: error.message || 'Internal Server Error',
      },
    }
    ctx.app.emit('error', error, ctx)
  }
}

export default errorMiddleware
