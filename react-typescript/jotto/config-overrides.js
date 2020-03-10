const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-react-remove-properties'], {
    properties: ['data-test']
  })
);
