import "/build/_shared/chunk-7VKCBD3I.js";
import {
  Image,
  Money
} from "/build/_shared/chunk-MYCPNADU.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-G3GZCD5K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/ProductGrid.jsx
var import_react3 = __toESM(require_react());

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
  const [nextPage, setNextPage] = (0, import_react3.useState)(
    collection.products.pageInfo.hasNextPage
  );
  const [endCursor, setEndCursor] = (0, import_react3.useState)(
    collection.products.pageInfo.endCursor
  );
  const [products, setProducts] = (0, import_react3.useState)(collection.products.nodes || []);
  const fetcher = useFetcher();
  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }
  (0, import_react3.useEffect)(() => {
    if (!fetcher.data)
      return;
    const { collection: collection2 } = fetcher.data;
    setProducts((prev) => [...prev, ...collection2.products.nodes]);
    setNextPage(collection2.products.pageInfo.hasNextPage);
    setEndCursor(collection2.products.pageInfo.endCursor);
  }, [fetcher.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.id, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    nextPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "inline-block rounded font-medium text-center py-3 px-6 border w-full cursor-pointer",
        disabled: fetcher.state !== "idle",
        onClick: fetchMoreProducts,
        children: fetcher.state !== "idle" ? "Loading..." : "Load more products"
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 43,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 35,
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
        lineNumber: 45,
        columnNumber: 9
      }, this),
      collection.description && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-baseline justify-between w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "max-w-md whitespace-pre-wrap inherit text-copy inline-block", children: collection.description }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/collections.$handle.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections.$handle.jsx",
      lineNumber: 44,
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
        lineNumber: 59,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/collections.$handle.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
export {
  Collection as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/collections.$handle-BY6RMCCY.js.map
