import React from "react";

export function lazyWithDelay(importFunc, delay = 1000) {
  return React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([module]) => module)
  );
}
export default lazyWithDelay;