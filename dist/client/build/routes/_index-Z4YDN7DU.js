import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ISEWWF37.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    { title: "Hydrogen" },
    { description: "A custom storefront powered by Hydrogen" }
  ];
}
function Index() {
  const { collections } = useLoaderData();
  console.log(collections);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hello from the home page!" }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-Z4YDN7DU.js.map
