import path from 'path'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
import HtmlWebpackPlugin from 'html-webpack-plugin'
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

export default {
  mode: 'development',
  entry: src + '/index.js',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      globDirectory: dist,
      globPatterns: [
        '**/*.{html,js}',
        'images/*.{png,gif,webp,svg}'
      ],
      swDest: dist + '/sw.js',
      runtimeCaching: [
        {
          // https://chojugiga.com/c/choju57_0019
          urlPattern: /^https:\/\/chojugiga\.com\/c\/choju57_0019.*$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'cdn-s3',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 240 * 60 * 60
            },
            cacheableResponse: { statuses: [0, 200] },
          }
        }
      ],
    })
  ],
}