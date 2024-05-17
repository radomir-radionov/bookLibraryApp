import pkg from 'jsonwebtoken';

import db from '../../../database/postgres/instance/index.js';
import jwtData from '../../../constants/jwtData.js';

const { sign, verify } = pkg;
const { Token } = db;
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = jwtData;

const generateTokens = (payload) => {
  const accessToken = sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' });
  const refreshToken = sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });
  return { accessToken, refreshToken };
};

const validateAccessToken = (token) => {
  try {
    const userData = verify(token, process.env.JWT_ACCESS_SECRET);
    return userData;
  } catch (e) {
    return null;
  }
};

const validateRefreshToken = (token) => {
  try {
    const userData = verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
  } catch (e) {
    return null;
  }
};

const saveToken = async (userId, refreshToken) => {
  const tokenData = await Token.findOne({ where: { userId } });

  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }

  const token = Token.create({ userId, refreshToken });

  return token;
};

const removeToken = async (refreshToken) =>
  await Token.destroy({ where: { refreshToken } });

const findToken = async (refreshToken) =>
  await Token.findOne({ where: { refreshToken } });

const tokenService = {
  generateTokens,
  validateAccessToken,
  validateRefreshToken,
  saveToken,
  findToken,
  removeToken,
};

export default tokenService;
