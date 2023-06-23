import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-G3GZCD5K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PrintJson({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { className: "outline outline-2 outline-blue-300 p-4 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { children: "Product JSON" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: JSON.stringify(data, null, 2) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this);
}
function ProductHandle() {
  const { handle, product } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Product Handle: ",
      handle
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrintJson, { data: product }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this);
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-Y2ZPKO2T.js.map
