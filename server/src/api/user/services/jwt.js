import pkg from 'jsonwebtoken';

import jwtData from '../../../constants/jwtData.js';

const { sign } = pkg;
const { JWT_ACCESS_SECRET } = jwtData;

console.log(3, JWT_ACCESS_SECRET);

export const createJwtToken = (data) =>
  sign(data, JWT_ACCESS_SECRET, { expiresIn: '30d' });
