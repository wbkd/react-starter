module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
