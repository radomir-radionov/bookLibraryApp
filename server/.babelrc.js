import path from 'path'
import jsConfig from './jsconfig.json' assert { type: 'json' }

export default {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve(jsConfig.compilerOptions.baseUrl)],
      },
    ],
  ],
}
