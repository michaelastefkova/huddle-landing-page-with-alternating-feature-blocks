const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssExtend = require('postcss-extend');
const postcssNested = require('postcss-nested');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    stylelint(),
    postcssPresetEnv(),
    postcssImport(),
    postcssExtend(),
    postcssMixins(),
    postcssNested(),
  ],
};
