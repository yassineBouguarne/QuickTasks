const StylexPlugin = require("@stylexjs/babel-plugin");

module.exports = {
  babel: {
    plugins: [
      [
        StylexPlugin,
        {
          dev: process.env.NODE_ENV === "development",
          genConditionalClasses: true,
          treeshakeCompensation: true,
          unstable_moduleResolution: {
            type: "commonJS",
            rootDir: __dirname,
          },
        },
      ],
    ],
  },
};
