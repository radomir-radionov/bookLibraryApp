import tokenService from '../api/auth/services/tokenService.js';
import errorText from '../constants/errorText.js';

const { UNAUTHORIZED_USER } = errorText;

const jwtAuthenticater = async (ctx, next) => {
  const authorizationHeader = ctx.request.headers.authorization;
  ctx.assert(authorizationHeader, 401, UNAUTHORIZED_USER);

  const accessToken = authorizationHeader.split(' ')[1];
  ctx.assert(accessToken, 401, UNAUTHORIZED_USER);

  const userData = tokenService.validateAccessToken(accessToken);
  ctx.assert(userData, 401, UNAUTHORIZED_USER);

  ctx.body = userData;

  await next();
};

export default jwtAuthenticater;
