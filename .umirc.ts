const path = require('path');
console.log(path.resolve(__dirname, './src'), "lujing");

export default {
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/dva"], dva: {},
  alias: {
    "@": path.resolve(__dirname, './src'),
    "@@": path.resolve(__dirname, './src/components'),
    // "@": ('./src'),
    // "@@": ('./src/components'),
  }
};
