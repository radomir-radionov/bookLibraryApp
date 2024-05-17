import authService from './services/authService.js';

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
