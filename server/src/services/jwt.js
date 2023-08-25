import pkg from 'jsonwebtoken'

import jwtData from '../constants/jwtData.js'

const {sign} = pkg
const {JWT_SECRET} = jwtData

export const createJwtToken = (data) => sign(data, JWT_SECRET, {expiresIn: '30d'})
