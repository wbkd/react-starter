module.exports = api => {
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

  const plugins = ['babel-plugin-styled-components'];

  const env = {
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: false,
          },
        ],
      ],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
