const CracoLessPlugin = require('craco-less');
const {readFileSync} = require('fs')
const {resolve} = require('path')
const lessToJS = require('less-vars-to-js');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: lessToJS(readFileSync(resolve(__dirname, 'src/theme.less'), 'utf8')),
            javascriptEnabled: true,
          },
        },
      }
    },
  ],
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
