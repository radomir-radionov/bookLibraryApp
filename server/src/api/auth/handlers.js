import pkg from 'lodash';

import db from '../../database/postgres/instance/index.js';
import modelAliases from '../../constants/modelAliases.js';
import errorText from '../../constants/errorText.js';
import createHash from '../../utils/createHash.js';
import tokenService from './services/tokenService.js';
import authService from './services/authService.js';

const { omit } = pkg;
const { User } = db;
const { EXSITED_USER, CREATE_USER_ERROR, UNAUTHORIZED_USER } = errorText;
const {
  avatarAlias,
  bookAlias,
  deliveryAlias,
  bookingAlias,
  historyAlias,
  commentAlias,
} = modelAliases;
const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;

const registration = async (ctx, next) => {
  const registerData = ctx.request.body;
  const userData = await authService.registration(ctx, registerData);

  ctx.cookies.set('refreshToken', userData.refreshToken, {
    httpOnly: true,
    maxAge: thirtyDaysInMilliseconds,
  });

  ctx.body = userData;
  await next();
};

const login = async (ctx, next) => {
  const loginData = ctx.request.body;
  const userData = await authService.login(ctx, loginData);

  ctx.cookies.set('refreshToken', userData.refreshToken, {
    httpOnly: true,
    maxAge: thirtyDaysInMilliseconds,
  });

  ctx.body = userData;
  await next();
};

const logout = async (ctx, next) => {
  const refreshToken = ctx.cookies.get('refreshToken');

  const token = await authService.logout(refreshToken);
  ctx.cookies.set('refreshToken', '');

  ctx.body = token;
  await next();
};

const refresh = async (ctx, next) => {
  const refreshToken = ctx.cookies.get('refreshToken');

  const userData = await authService.refresh(ctx, refreshToken);

  ctx.cookies.set('refreshToken', userData.refreshToken, {
    httpOnly: true,
    maxAge: thirtyDaysInMilliseconds,
  });

  ctx.body = userData;
  await next();
};

const authHandlers = { registration, login, logout, refresh };

export default authHandlers;
