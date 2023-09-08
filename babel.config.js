const isDEV = process.env.NODE_ENV === 'development'

module.exports = {
  presets: ["@babel/preset-env", '@babel/preset-react'],
  "plugins": [
    isDEV && require.resolve('react-refresh/babel'),
  ].filter(Boolean),
};
