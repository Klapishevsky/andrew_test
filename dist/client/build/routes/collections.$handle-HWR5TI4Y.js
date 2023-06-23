import {
  Image,
  Money
} from "/build/_shared/chunk-LFZAGFMG.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-RHTJONO7.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/ProductCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-sm rounded relative", children: [
      isDiscounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs", children: "Sale" }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Image,
        {
          data: product.variants.nodes[0].image,
          alt: product.title
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCard.jsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ", children: product.title }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
          fileName: "app/components/ProductCard.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        isDiscounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Money,
          {
            className: "line-through opacity-50",
            withoutTrailingZeros: true,
            data: compareAtPrice
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCard.jsx",
            lineNumber: 29,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCard.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/ProductGrid.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductGrid({ collection, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: collection.products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.id, false, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/collections.$handle.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154)
});
var handle = {
  seo
};
function meta({ data }) {
  return [
    { title: data?.collection?.title ?? "Collection" },
    { description: data?.collection?.description }
  ];
}
function Collection() {
  const { collection } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "grid w-full gap-8 py-8 justify-items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl whitespace-pre-wrap font-bold inline-block", children: collection.title }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      collection.description && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-baseline justify-between w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "max-w-md whitespace-pre-wrap inherit text-copy inline-block", children: collection.description }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections.$handle.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      ProductGrid,
      {
        collection,
        url: `/collections/${collection.handle}`
      },
      void 0,
      false,
      {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/collections.$handle.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
export {
  Collection as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/collections.$handle-HWR5TI4Y.js.map
