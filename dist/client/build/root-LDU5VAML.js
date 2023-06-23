import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-RHTJONO7.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/styles/tailwind-build.css
var tailwind_build_default = "/build/_assets/tailwind-build-JWCOJFYO.css";

// app/styles/app.css
var app_default = "/build/_assets/app-RK35PAK2.css";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/components/Layout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen antialiased bg-neutral-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "header",
      {
        role: "banner",
        className: `flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "font-bold", href: "/", children: title }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 8,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.jsx",
        lineNumber: 4,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "main",
      {
        role: "main",
        id: "mainContent",
        className: "flex-grow p-6 md:p-8 lg:p-12",
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.jsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_build_default },
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
function App() {
  const data = useLoaderData();
  const { name } = data.layout.shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { title: name, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-LDU5VAML.js.map
