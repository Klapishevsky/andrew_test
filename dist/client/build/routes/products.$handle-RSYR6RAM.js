import {
  MediaFile
} from "/build/_shared/chunk-MYCPNADU.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-G3GZCD5K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const { product } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGallery, { media: product.media.nodes }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold leading-10 whitespace-normal", children: product.title }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium", children: product.vendor }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 45,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Product Options TODO" }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "prose border-t border-gray-200 pt-6 text-black text-md",
          dangerouslySetInnerHTML: { __html: product.descriptionHtml }
        },
        void 0,
        false,
        {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 50,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 40,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 33,
    columnNumber: 7
  }, this);
}
function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }
  const typeNameMap = {
    MODEL_3D: "Model3d",
    VIDEO: "Video",
    IMAGE: "MediaImage",
    EXTERNAL_VIDEO: "ExternalVideo"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: `grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-[90vw] md:w-full lg:col-span-2`,
      children: media.map((med, i) => {
        let extraProps = {};
        if (med.mediaContentType === "MODEL_3D") {
          extraProps = {
            interactionPromptThreshold: "0",
            ar: true,
            loading: "eager",
            disableZoom: true,
            style: { height: "100%", margin: "0 auto" }
          };
        }
        const data = {
          ...med,
          __typename: typeNameMap[med.mediaContentType] || typeNameMap["IMAGE"],
          image: {
            ...med.image,
            altText: med.alt || "Product image"
          }
        };
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: `${i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"} snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              MediaFile,
              {
                tabIndex: "0",
                className: `w-full h-full aspect-square object-cover`,
                data,
                ...extraProps
              },
              void 0,
              false,
              {
                fileName: "app/routes/products.$handle.jsx",
                lineNumber: 104,
                columnNumber: 15
              },
              this
            )
          },
          data.id || data.image.id,
          false,
          {
            fileName: "app/routes/products.$handle.jsx",
            lineNumber: 98,
            columnNumber: 13
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 72,
      columnNumber: 7
    },
    this
  );
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-RSYR6RAM.js.map
