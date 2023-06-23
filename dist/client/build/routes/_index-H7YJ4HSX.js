import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-RHTJONO7.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "whitespace-pre-wrap max-w-prose font-bold text-lead", children: "Collections" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3", children: collections.nodes.map((collection) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, children: collection.title }, collection.id, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-H7YJ4HSX.js.map
