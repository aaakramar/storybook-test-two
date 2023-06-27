import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";

export default {
  input: "stories/main.js",
  /****  pkg.main and pkg.module refer to properties in the package.json file of your project
  These properties define the output file paths for the bundled code.
   pkg.main: This property specifies the entry point for your package/module. It is typically the CommonJS (CJS) module format.
   pkg.module: This property specifies the entry point for the module in ECMAScript module (ESM) format.
   ***/
  output: [
    { file: "dist/bundle.cjs.js", format: "cjs" }, // CJS is short for CommonJS
    { file: "dist/bundle.esm.js", format: "esm" }, // ES Modules (or short: ESM)
  ],

  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    typescript(),
    scss(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import terser from "@rollup/plugin-terser";
// import babel from "@rollup/plugin-babel";
// import pkg from "./package.json";

// export default {
//   // input:'src/index.js',
//   input: "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   output: [
//     { file: pkg.main, format: "cjs" },
//     { file: pkg.module, format: "esm" },
//   ],

//   plugins: [
//     babel({
//       babelHelpers: "bundled",
//       exclude: "node_modules/**",
//       presets: ["@babel/preset-env", "@babel/preset-react"],
//     }),
//     resolve(),
//     commonjs(),
//     terser(),
//   ],
//   external: Object.keys(pkg.peerDependencies),
// };
