import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import fs from "fs";

export default {
  input: "src/index.ts",
  output: {
    file: "build/typing-practice.user.js",
    format: "iife",
    banner: fs.readFileSync("./src/header.txt"),
  },
  plugins: [typescript(), nodeResolve(), commonjs()],
};
