// 在React 17 之前，是这样转换的
const babel = require("@babel/core");

const sourceCode = `
 <h1>
    hello <span style={{ color: "red" }}>world</span>
  </h1>
`;

const result = babel.transform(sourceCode, {
  // todo runtime: "classic" 是什么意思？
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "classic" }]],
});

console.log(result.code);

// /*#__PURE__*/ React.createElement(
//   "h1",
//   null,
//   "hello ",
//   /*#__PURE__*/ React.createElement(
//     "span",
//     {
//       style: {
//         color: "red",
//       },
//     },
//     "world"
//   )
// );
