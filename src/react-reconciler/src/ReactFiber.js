
import { HostRoot } from './ReactWorkTags'



/**
 * 
 * @param {*} tag fiber的类型，比如 函数组件0，类组件1，原生组件5，根元素3
 * @param {*} pendingProps 新属性，等待处理或者生效的属性
 * @param {*} key 唯一标识
 * @returns 
 */
export function FiberNode(tag, pendingProps, key) {
    // 作为静态数据结构的属性
    this.tag = tag;
    this.key = key;
    this.type = null; //fiber类型，来自虚拟DOM的type span div p...
    // 每个虚拟DOM => fiber节点 => 真实DOM节点
    this.stateNode = null; // 此fiber对应的真实DOM节点

    // 用于连接其他Fiber节点形成Fiber树
    this.return = null; //指向父节点
    this.child = null; // 指向第一个子节点
    this.sibling = null; // 指向第一个兄弟节点
    this.index = 0;

     // 作为动态的工作单元的属性
    // fiber哪来的？ 通过虚拟DOM节点创建的，虚拟DOM会提供pendingProps来创建fiber节点的一些属性
    this.pendingProps = pendingProps; // 等待生效的属性，处理完会赋给memoizedProps
    this.memoizedProps = null; // 已经生效的属性
    this.memoizedState = null; //每个fiber还会有自己的状态，每种fiber存的状态类型不一样
    // eg. 类组件对应的fiber，存储的就是类实例的状态
    //     HostRoot 存的就是要渲染的元素
    this.updateQueue = null; // 每个fiber身上可能还有更新队列

    //副作用的标识，表示要针对此fiber执行什么操作 eg. 增删改
    this.flags = Noflags;
    // 所有子节点对应的flags的集合
    this.subTreeFlags = Noflags;
    this.alternate = null;
}

export function createFiber(tag, pendingProps, key) {
    return new FiberNode(tag, pendingProps, key);
}

/**
 * 创建 根节点对应的fiber节点
 * @returns 
 */
export function createHostRootFiber() {
    return createFiber(HostRoot,null,null)
}