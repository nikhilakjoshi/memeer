module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8efb1b664e3b91f02c044d1d645bc8fe'),
  },
});
