import pkg from 'jsonwebtoken'
import jwtData from '../constants/jwtData.js'

const {verify} = pkg
const {JWT_SECRET} = jwtData

const jwtAuthenticater = async (ctx, next) => {
  const {authorization} = ctx.headers
  if (!authorization) {
    ctx.throw(401, 'Unauthorized. Token is required.')
  }

  const [, token] = authorization.split(' ')

  try {
    const decoded = await verify(token, JWT_SECRET)
    ctx.state.userTokenData = decoded
    await next()
  } catch (err) {
    ctx.throw(401, `Unauthorized: ${err.message}`)
  }
}

export default jwtAuthenticater
