// tslint:disable-next-line: no-var-requires
const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'solid',
  frameworkPath: 'storybook-solid',
  frameworkPresets: [require.resolve('./framework-preset-solid.js')],
};
