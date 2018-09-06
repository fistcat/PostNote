if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://fistcat:zhang.1991@ds029745.mlab.com:29745/vidjot-prod'
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}
