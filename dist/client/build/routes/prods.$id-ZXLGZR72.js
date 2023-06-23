import {
  ProductOptions
} from "/build/_shared/chunk-MXLE3752.js";
import {
  MediaFile,
  Money
} from "/build/_shared/chunk-ZEGRJOPV.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-DK2Z6Z7L.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/prods.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const { product, selectedVariant } = useLoaderData();
  const isDiscounted = selectedVariant.compareAtPrice != null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGallery, { media: product.media.nodes }, void 0, false, {
      fileName: "app/routes/prods.$id.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/prods.$id.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/prods.$id.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold leading-10 whitespace-normal", children: product.title }, void 0, false, {
          fileName: "app/routes/prods.$id.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          " ",
          isDiscounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Old Price:" }, void 0, false, {
              fileName: "app/routes/prods.$id.jsx",
              lineNumber: 61,
              columnNumber: 28
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Money,
              {
                className: "line-through opacity-50",
                withoutTrailingZeros: true,
                data: selectedVariant.compareAtPrice
              },
              void 0,
              false,
              {
                fileName: "app/routes/prods.$id.jsx",
                lineNumber: 62,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              " New Price: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Money,
                {
                  withoutTrailingZeros: true,
                  data: selectedVariant.price,
                  className: "text-xl font-semibold mb-2"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/prods.$id.jsx",
                  lineNumber: 67,
                  columnNumber: 36
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/prods.$id.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/prods.$id.jsx",
            lineNumber: 61,
            columnNumber: 23
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Price: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Money,
              {
                withoutTrailingZeros: true,
                data: selectedVariant.price,
                className: "text-xl font-semibold mb-2"
              },
              void 0,
              false,
              {
                fileName: "app/routes/prods.$id.jsx",
                lineNumber: 74,
                columnNumber: 35
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/prods.$id.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/prods.$id.jsx",
            lineNumber: 73,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/prods.$id.jsx",
          lineNumber: 60,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium", children: product.vendor }, void 0, false, {
          fileName: "app/routes/prods.$id.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/prods.$id.jsx",
        lineNumber: 56,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductOptions,
        {
          options: product.options,
          selectedVariant
        },
        void 0,
        false,
        {
          fileName: "app/routes/prods.$id.jsx",
          lineNumber: 85,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Selected Variant: ",
        product.selectedVariant?.id
      ] }, void 0, true, {
        fileName: "app/routes/prods.$id.jsx",
        lineNumber: 90,
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
          fileName: "app/routes/prods.$id.jsx",
          lineNumber: 92,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/prods.$id.jsx",
      lineNumber: 55,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/prods.$id.jsx",
    lineNumber: 49,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/prods.$id.jsx",
    lineNumber: 48,
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
                fileName: "app/routes/prods.$id.jsx",
                lineNumber: 146,
                columnNumber: 15
              },
              this
            )
          },
          data.id || data.image.id,
          false,
          {
            fileName: "app/routes/prods.$id.jsx",
            lineNumber: 140,
            columnNumber: 13
          },
          this
        );
      })
    },
    void 0,
    false,
    {
      fileName: "app/routes/prods.$id.jsx",
      lineNumber: 114,
      columnNumber: 7
    },
    this
  );
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/prods.$id-ZXLGZR72.js.map
