import {
  Link,
  require_jsx_dev_runtime,
  useLocation,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-DK2Z6Z7L.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/ProductOptions.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductOptions({ options, selectedVariant }) {
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);
    if (!selectedVariant) {
      return defaultParams;
    }
    for (const { name, value } of selectedVariant.selectedOptions) {
      if (!currentSearchParams.has(name)) {
        defaultParams.set(name, value);
      }
    }
    return defaultParams;
  })();
  const searchParams = navigation.location ? new URLSearchParams(navigation.location.search) : paramsWithDefaults;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 mb-6", children: options.map((option) => {
    if (!option.values.length) {
      return;
    }
    const currentOptionVal = searchParams.get(option.name);
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
            const linkParams = new URLSearchParams(searchParams);
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

export {
  ProductOptions
};
//# sourceMappingURL=/build/_shared/chunk-MXLE3752.js.map
