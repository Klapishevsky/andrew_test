import {
  MediaFile
} from "/build/_shared/chunk-ZNX44X26.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData,
  useLocation,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-DK2Z6Z7L.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/ProductOptions.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductOptions({ options: options2, selectedVariant: selectedVariant2 }) {
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);
    if (!selectedVariant2) {
      return defaultParams;
    }
    for (const { name, value } of selectedVariant2.selectedOptions) {
      if (!currentSearchParams.has(name)) {
        defaultParams.set(name, value);
      }
    }
    return defaultParams;
  })();
  const searchParams2 = navigation.location ? new URLSearchParams(navigation.location.search) : paramsWithDefaults;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 mb-6", children: options2.map((option) => {
    if (!option.values.length) {
      return;
    }
    const currentOptionVal = searchParams2.get(option.name);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]", children: option.name }, void 0, false, {
            fileName: "app/components/ProductOptions.jsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-baseline gap-4", children: option.values.map((value) => {
            const linkParams = new URLSearchParams(searchParams2);
            const isSelected = currentOptionVal === value;
            linkParams.set(option.name, value);
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `${pathname}?${linkParams.toString()}`,
                preventScrollReset: true,
                replace: true,
                className: `leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200 ${isSelected ? "border-gray-500" : "border-neutral-50"}`,
                children: value
              },
              value,
              false,
              {
                fileName: "app/components/ProductOptions.jsx",
                lineNumber: 58,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/components/ProductOptions.jsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ]
      },
      option.name,
      true,
      {
        fileName: "app/components/ProductOptions.jsx",
        lineNumber: 44,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "app/components/ProductOptions.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/ProductPrice.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductPrice() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-4 mb-6", children: options.map((option) => {
    if (!option.values.length) {
      return;
    }
    const currentOptionVal = searchParams.get(option.name);
    if (selectedVariant.compareAtPrice != null) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Old Price: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Money,
          {
            withoutTrailingZeros: true,
            data: selectedVariant.compareAtPrice,
            className: "text-xl font-semibold mb-2"
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductPrice.jsx",
            lineNumber: 18,
            columnNumber: 31
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/ProductPrice.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ProductPrice.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "New Price: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Money,
        {
          withoutTrailingZeros: true,
          data: selectedVariant.price,
          className: "text-xl font-semibold mb-2"
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductPrice.jsx",
          lineNumber: 28,
          columnNumber: 27
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/ProductPrice.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ProductPrice.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/ProductPrice.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const { product: product2, selectedVariant: selectedVariant2 } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductGallery, { media: product2.media.nodes }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold leading-10 whitespace-normal", children: product2.title }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductPrice, {}, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium", children: product2.vendor }, void 0, false, {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        ProductOptions,
        {
          options: product2.options,
          selectedVariant: selectedVariant2
        },
        void 0,
        false,
        {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 67,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Selected Variant: ",
        product2.selectedVariant?.id
      ] }, void 0, true, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "prose border-t border-gray-200 pt-6 text-black text-md",
          dangerouslySetInnerHTML: { __html: product2.descriptionHtml }
        },
        void 0,
        false,
        {
          fileName: "app/routes/products.$handle.jsx",
          lineNumber: 74,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 56,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 49,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: `${i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"} snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
                lineNumber: 128,
                columnNumber: 15
              },
              this
            )
          },
          data.id || data.image.id,
          false,
          {
            fileName: "app/routes/products.$handle.jsx",
            lineNumber: 122,
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
      lineNumber: 96,
      columnNumber: 7
    },
    this
  );
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-OZQMXNOS.js.map
