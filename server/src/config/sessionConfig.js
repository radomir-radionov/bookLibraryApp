const sessionConfig = {
  key: 'sid',
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};

export default sessionConfig;
