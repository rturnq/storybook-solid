/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

function getCommand(watch) {
  const tsc = path.join(__dirname, '..', 'node_modules', '.bin', 'tsc');

  const args = ['--outDir ./app/solid/dist', '--listEmittedFiles true'];

  /**
   * Only emit declarations if it does not need to be compiled with tsc
   * Currently, angular and storyshots (that contains an angular component) need to be compiled
   * with tsc. (see comments in compile-babel.js)
   */

  if (watch) {
    args.push('-w');
  }

  return `${tsc} ${args.join(' ')}`;
}

function handleExit(code, stderr, errorCallback) {
  if (code !== 0) {
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback(stderr);
    }
    shell.exit(code);
  }
}

function tscfy(options = {}) {
  const { watch = false, silent = false, errorCallback } = options;
  const tsConfigFile = 'tsconfig.json';

  if (!fs.existsSync(tsConfigFile)) {
    if (!silent) {
      console.log(`No ${tsConfigFile}`);
    }
    return;
  }

  const command = getCommand(watch);
  const { code, stderr } = shell.exec(command, { silent });

  handleExit(code, stderr, errorCallback);
}

module.exports = {
  tscfy,
};
