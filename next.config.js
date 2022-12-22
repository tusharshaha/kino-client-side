module.exports = {
  async redirects() {
    return [
      {
        source: '/api/v1/payment/success',
        destination: '/my_account/orders',
        permanent: true,
      }
    ]
  },
  reactStrictMode: true,
}
