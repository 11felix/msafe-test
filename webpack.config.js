const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { execSync } = require("child_process");

// Function to get the current Git branch
function getCurrentBranch() {
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD")
        .toString()
        .trim();
    return branch;
  } catch (error) {
    console.error("Error getting current Git branch:", error);
    return "unknown";
  }
}

module.exports = (_env, _argv) => {
  let envFile;
  // Set the outDir based on the Git branch
  const branch = getCurrentBranch();

  switch (branch) {
    case "main":
      envFile = "./.env.development";
      break;
    case "production":
      envFile = "./.env.production";
      break;
    case "staging":
      envFile = "./.env.staging";
      break;
    default:
      envFile = "./.env";
      console.log(`Unknown branch '${branch}', using default directory.`);
  }

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    resolve: {
      alias: {
        "decimal.js": path.resolve(__dirname, "node_modules/decimal.js"),
        "bignumber.js": path.resolve(__dirname, "node_modules/bignumber.js"),
        "valibot/dist": path.resolve(__dirname, "node_modules/valibot/dist"),
        graphql: path.resolve(__dirname, "node_modules/graphql"),
        "@mysten/sui": path.resolve(__dirname, "node_modules/@mysten/sui"),
      },
      extensions: [".ts", ".js", ".tsx"],
      fallback: {
        fs: false,
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        tty: require.resolve("tty-browserify"),
        url: require.resolve("url/"),
        util: require.resolve("util/"),
        crypto: require.resolve("crypto-browserify"),
        zlib: require.resolve("browserify-zlib"),
        vm: require.resolve("vm-browserify"),
        process: require.resolve("process/browser"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "style-loader", // Injects styles into the DOM
            "css-loader", // Resolves @import and url() syntax
            "postcss-loader", // Processes CSS with PostCSS
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(ttf|otf|woff|woff2|eot)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[name][ext]",
          },
        },
      ],
    },
    mode: "production",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico", // This will inject the favicon link into the HTML,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/favicon.ico", to: "favicon.ico" },
          { from: "src/assets", to: "assets" },
        ],
      }),
      new Dotenv({
        path: envFile,
      }),
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
        context: "src",
      }),
    ],
  };
};
