/**
 * author 张坤
 * discription 实现jsxDev方法 实现 jsx --> 虚拟dom
 * date 10.28
 */
import hasOwnProperty from "shared/hasOwnProperty"; // 使用vite配置别名，不用写繁琐的路径
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

//保留属性（react会对其特殊处理，不会将其直接传给子组件）
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};
/**
 * 判断key、ref 是否存在（有效）
 * @param {*} config 属性
 * @returns boolean
 */
function hasVaildKey(config) {
  return config.key !== undefined;
}
function hasVaildRef(config) {
  return config.ref !== undefined;
}

/**
 * 工厂方法 用于返回虚拟dom
 * @param {*} type 类型
 * @param {*} key
 * @param {*} ref
 * @param {*} props 属性
 */
function ReactElement(type, key, ref, props) {
  return {
    // 这就是REACT元素，也就是虚拟DOM
    $$typeof: REACT_ELEMENT_TYPE,
    type, // div 这种DOM类型
    key,
    ref,
    props, // 属性 children style id 等
  };
}

export function jsxDEV(type, config) {
  debugger
  let propName; //属性名
  const props = {}; //属性
  let key = null; //可选， 即diff中用于区分一个父节点下不同子节点的顺序
  let ref = null; // 引用，可用来获取真实dom

  // 给ref和key赋值
  if (hasVaildKey(config)) {
    key = config.key;
  }
  if (hasVaildRef(config)) {
    ref = config.ref;
  }

  // 对属性进行一个拷贝
  for (propName in config) {
    //判断是否是它自身的属性（非原型链上的）,以及处理 保留属性（key，ref ...）
    if (
      // hasOwnProperty 还是 object原型上的方法，只不过进行了抽离，使代码更简约了
      hasOwnProperty.call(config, propName) &&
      !RESERVED_PROPS.hasOwnProperty(propName)
    )
      props[propName] = config[propName];
  }

  return ReactElement(type, key, ref, props);
}
