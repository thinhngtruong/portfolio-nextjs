const path = require('path');

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['static.ghost.org', 'thinh-nguyen.ghost.io']
  },
}
