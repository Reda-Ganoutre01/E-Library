import { lazy } from "react";

const lazyComponent = (importCallBack, delay = 100) =>
    lazy(() =>
        new Promise((resolve) => {
            setTimeout(() => resolve(importCallBack()), delay);
        })
    );

export default lazyComponent;
