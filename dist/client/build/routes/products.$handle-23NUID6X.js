import {
  MediaFile
} from "/build/_shared/chunk-QKUXTDJ3.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-7MND47VM.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/ProductOptions.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductOptions({ options }) {
  const { pathname, search } = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 mb-6", children: options.map((option) => {
    if (!option.values.length) {
      return;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]", children: option.name }, void 0, false, {
            fileName: "app/components/ProductOptions.jsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-baseline gap-4", children: option.values.map((value) => {
            const linkParams = new URLSearchParams(search);
            linkParams.set(option.name, value);
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `${pathname}?${linkParams.toString()}`,
                preventScrollReset: true,
                replace: true,
                className: "leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200",
                children: value
              },
              value,
              false,
              {
                fileName: "app/components/ProductOptions.jsx",
                lineNumber: 30,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/components/ProductOptions.jsx",
            lineNumber: 23,
            columnNumber: 13
          }, this)
        ]
      },
      option.name,
      true,
      {
        fileName: "app/components/ProductOptions.jsx",
        lineNumber: 15,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/components/ProductOptions.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const { product } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductGallery, { media: product.media.nodes }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold leading-10 whitespace-normal", children: product.title }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium", children: product.vendor }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductOptions, { options: product.options }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "prose border-t border-gray-200 pt-6 text-black text-md",
          dangerouslySetInnerHTML: { __html: product.descriptionHtml }
        },
        void 0,
        false,
        {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 51,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 34,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "div",
          {
            className: `${i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"} snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
                lineNumber: 105,
                columnNumber: 15
              },
              this
            )
          },
          data.id || data.image.id,
          false,
          {
            fileName: "app/routes/products.$handle.jsx",
            lineNumber: 99,
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
      lineNumber: 73,
      columnNumber: 7
    },
    this
  );
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-23NUID6X.js.map
