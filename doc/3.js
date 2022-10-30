// 虚拟DOM的元素是 从内向外 生成的
// 原因：本质是函数嵌套调用，自然先执行里面的函数
// _jsx2(_jsx1()) 先执行_jsx1

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