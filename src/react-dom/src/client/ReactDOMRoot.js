import { createContainer } from "react-reconciler/src/ReactFiberReconciler";


function ReactDOMRoot(internalRoot) {
    this._internalRoot = internalRoot
}

/**
 * 
 * @param {*} container 
 * @returns 
 */
export function createRoot(container) {
  // div#root 传进来的是index.html中的根DOM
  const root = createContainer(container);

  return new ReactDOMRoot(root);
}
