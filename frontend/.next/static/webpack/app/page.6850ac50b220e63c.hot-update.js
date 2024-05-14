"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/LatestTransactions.tsx":
/*!***********************************************!*\
  !*** ./src/components/LatestTransactions.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LatestTransactions() {\n    const latestTransactions = [\n        {\n            hash: \"0x123...\",\n            blockNumber: 1234567,\n            timestamp: \"2024-05-14 10:30:00\",\n            value: \"1 ETH\"\n        },\n        {\n            hash: \"0x456...\",\n            blockNumber: 1234566,\n            timestamp: \"2024-05-14 09:45:00\",\n            value: \"0.5 ETH\"\n        },\n        {\n            hash: \"0x789...\",\n            blockNumber: 1234565,\n            timestamp: \"2024-05-14 08:55:00\",\n            value: \"2 ETH\"\n        }\n    ];\n    const calculateElapsedTime = (timestamp)=>{\n        const transactionTime = new Date(timestamp).getTime();\n        const currentTime = Date.now();\n        const elapsedTime = currentTime - transactionTime;\n        const seconds = Math.floor(elapsedTime / 1000);\n        const minutes = Math.floor(seconds / 60);\n        const hours = Math.floor(minutes / 60);\n        const days = Math.floor(hours / 24);\n        if (days > 0) {\n            return \"\".concat(days, \" days ago\");\n        } else if (hours > 0) {\n            return \"\".concat(hours, \" hours ago\");\n        } else if (minutes > 0) {\n            return \"\".concat(minutes, \" minutes ago\");\n        } else {\n            return \"\".concat(seconds, \" seconds ago\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full md:w-3/4 lg:w-2/3 xl:w-1/2 divide-y divide-gray-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"bg-gray-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            colSpan: \"3\",\n                            className: \"px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider\",\n                            children: \"Latest Transactions\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    className: \"bg-white divide-y divide-gray-200\",\n                    children: latestTransactions.map((transaction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-gray-900\",\n                                            children: transaction.hash\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-xs text-gray-500\",\n                                            children: calculateElapsedTime(transaction.timestamp)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-900\",\n                                        children: \"From 0x0000... to 0x0001...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-6 py-4 whitespace-nowrap\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-900\",\n                                        children: [\n                                            transaction.value,\n                                            \" DCL\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestTransactions.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = LatestTransactions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestTransactions);\nvar _c;\n$RefreshReg$(_c, \"LatestTransactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhdGVzdFRyYW5zYWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsU0FBU0M7SUFDUCxNQUFNQyxxQkFBcUI7UUFDekI7WUFBRUMsTUFBTTtZQUFZQyxhQUFhO1lBQVNDLFdBQVc7WUFBdUJDLE9BQU87UUFBUTtRQUMzRjtZQUFFSCxNQUFNO1lBQVlDLGFBQWE7WUFBU0MsV0FBVztZQUF1QkMsT0FBTztRQUFVO1FBQzdGO1lBQUVILE1BQU07WUFBWUMsYUFBYTtZQUFTQyxXQUFXO1lBQXVCQyxPQUFPO1FBQVE7S0FDNUY7SUFFRCxNQUFNQyx1QkFBdUIsQ0FBQ0Y7UUFDNUIsTUFBTUcsa0JBQWtCLElBQUlDLEtBQUtKLFdBQVdLLE9BQU87UUFDbkQsTUFBTUMsY0FBY0YsS0FBS0csR0FBRztRQUM1QixNQUFNQyxjQUFjRixjQUFjSDtRQUNsQyxNQUFNTSxVQUFVQyxLQUFLQyxLQUFLLENBQUNILGNBQWM7UUFDekMsTUFBTUksVUFBVUYsS0FBS0MsS0FBSyxDQUFDRixVQUFVO1FBQ3JDLE1BQU1JLFFBQVFILEtBQUtDLEtBQUssQ0FBQ0MsVUFBVTtRQUNuQyxNQUFNRSxPQUFPSixLQUFLQyxLQUFLLENBQUNFLFFBQVE7UUFFaEMsSUFBSUMsT0FBTyxHQUFHO1lBQ1osT0FBTyxHQUFRLE9BQUxBLE1BQUs7UUFDakIsT0FBTyxJQUFJRCxRQUFRLEdBQUc7WUFDcEIsT0FBTyxHQUFTLE9BQU5BLE9BQU07UUFDbEIsT0FBTyxJQUFJRCxVQUFVLEdBQUc7WUFDdEIsT0FBTyxHQUFXLE9BQVJBLFNBQVE7UUFDcEIsT0FBTztZQUNMLE9BQU8sR0FBVyxPQUFSSCxTQUFRO1FBQ3BCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBTUQsV0FBVTs7OEJBQ2YsOERBQUNFO29CQUFNRixXQUFVOzhCQUNmLDRFQUFDRztrQ0FDQyw0RUFBQ0M7NEJBQUdDLFNBQVE7NEJBQUlMLFdBQVU7c0NBQW1GOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUtqSCw4REFBQ007b0JBQU1OLFdBQVU7OEJBQ2RuQixtQkFBbUIwQixHQUFHLENBQUMsQ0FBQ0MsYUFBYUMsc0JBQ3BDLDhEQUFDTjs7OENBQ0MsOERBQUNPO29DQUFHVixXQUFVOztzREFDWiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQXlCUSxZQUFZMUIsSUFBSTs7Ozs7O3NEQUN4RCw4REFBQ2lCOzRDQUFJQyxXQUFVO3NEQUF5QmQscUJBQXFCc0IsWUFBWXhCLFNBQVM7Ozs7Ozs7Ozs7Ozs4Q0FFcEYsOERBQUMwQjtvQ0FBR1YsV0FBVTs4Q0FDWiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs4Q0FFekMsOERBQUNVO29DQUFHVixXQUFVOzhDQUNaLDRFQUFDRDt3Q0FBSUMsV0FBVTs7NENBQXlCUSxZQUFZdkIsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7OzsyQkFUckR3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyQjtLQXhEUzdCO0FBMERULCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF0ZXN0VHJhbnNhY3Rpb25zLnRzeD9iYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMYXRlc3RUcmFuc2FjdGlvbnMoKSB7XHJcbiAgY29uc3QgbGF0ZXN0VHJhbnNhY3Rpb25zID0gW1xyXG4gICAgeyBoYXNoOiBcIjB4MTIzLi4uXCIsIGJsb2NrTnVtYmVyOiAxMjM0NTY3LCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDEwOjMwOjAwJywgdmFsdWU6ICcxIEVUSCcgfSxcclxuICAgIHsgaGFzaDogXCIweDQ1Ni4uLlwiLCBibG9ja051bWJlcjogMTIzNDU2NiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAwOTo0NTowMCcsIHZhbHVlOiAnMC41IEVUSCcgfSxcclxuICAgIHsgaGFzaDogXCIweDc4OS4uLlwiLCBibG9ja051bWJlcjogMTIzNDU2NSwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAwODo1NTowMCcsIHZhbHVlOiAnMiBFVEgnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlRWxhcHNlZFRpbWUgPSAodGltZXN0YW1wOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvblRpbWUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gY3VycmVudFRpbWUgLSB0cmFuc2FjdGlvblRpbWU7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIDEwMDApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblxyXG4gICAgaWYgKGRheXMgPiAwKSB7XHJcbiAgICAgIHJldHVybiBgJHtkYXlzfSBkYXlzIGFnb2A7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID4gMCkge1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9IGhvdXJzIGFnb2A7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPiAwKSB7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzfSBtaW51dGVzIGFnb2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7c2Vjb25kc30gc2Vjb25kcyBhZ29gO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMy80IGxnOnctMi8zIHhsOnctMS8yIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgTGF0ZXN0IFRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgIHtsYXRlc3RUcmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e3RyYW5zYWN0aW9uLmhhc2h9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPntjYWxjdWxhdGVFbGFwc2VkVGltZSh0cmFuc2FjdGlvbi50aW1lc3RhbXApfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj5Gcm9tIDB4MDAwMC4uLiB0byAweDAwMDEuLi48L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e3RyYW5zYWN0aW9uLnZhbHVlfSBEQ0w8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdGVzdFRyYW5zYWN0aW9ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF0ZXN0VHJhbnNhY3Rpb25zIiwibGF0ZXN0VHJhbnNhY3Rpb25zIiwiaGFzaCIsImJsb2NrTnVtYmVyIiwidGltZXN0YW1wIiwidmFsdWUiLCJjYWxjdWxhdGVFbGFwc2VkVGltZSIsInRyYW5zYWN0aW9uVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVudFRpbWUiLCJub3ciLCJlbGFwc2VkVGltZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJjb2xTcGFuIiwidGJvZHkiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LatestTransactions.tsx\n"));

/***/ })

});