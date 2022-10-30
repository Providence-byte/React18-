// 当前不可以使用esm
// import {babel} from "@babel/core";

const babel = require("@babel/core");

const sourseCode = `
<h1>
    hello <span style={{ color: "red" }}>world</span>
  </h1>
`;

const result = babel.transform(sourseCode, {
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
});

console.log(result.code);

// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";
// _jsxs("h1", {
//   children: [
//     "hello ",
//     _jsx("span", {
//       style: {
//         color: "red",
//       },
//       children: "world",
//     }),
//   ],
// });
