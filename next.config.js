module.exports = {
  reactStrictMode: false,
  //assetPrefix: "./",
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
