module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: 3,
        modules: false, // Ensure Babel doesn't transform ES modules to CommonJS
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    // Ensure no plugin or polyfill that affects BigInt is added
    "@babel/plugin-transform-runtime",
  ],
};
