import {createHostRootFiber} from './ReactFiber'

function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

/**
 * 创建FiberRootNode与 HostRootFiber
 * @param {*} containerInfo 
 * @returns 
 */
export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // HostRoot指的是根节点div#root
  const uninitializedFiber = createHostRootFiber();
  // 根容器的current指向当前的根fiber
  root.current = uninitializedFiber();
  // 根fiber的stateNode，也就是真实dom节点，指向FiberRootNode
  return root;
}
