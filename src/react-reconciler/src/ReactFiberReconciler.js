import { createFiberRoot } from "./ReactFiberRoot";
// 创建根节点
export function createContainer(containerInfo) {
  return createFiberRoot(containerInfo);
}
