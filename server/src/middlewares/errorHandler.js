import errorText from '../constants/errorText.js'

const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || 500
    ctx.body = {
      data: null,
      error: {
        status: ctx.status,
        message: error.message || errorText.INTERNAL_SERVER_ERROR,
      },
    }
  }
}

export default errorHandler
