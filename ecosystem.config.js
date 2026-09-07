module.exports = {
  apps: [
    {
      name: "demo-mentora",
      cwd: __dirname,
      script: "node_modules/.bin/next",
      args: "start -p 3211 -H 127.0.0.1",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
