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

/***/ "(app-pages-browser)/./src/components/LatestBlocks.tsx":
/*!*****************************************!*\
  !*** ./src/components/LatestBlocks.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LatestBlocks() {\n    const latestBlocks = [\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        },\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        },\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        }\n    ];\n    const calculateElapsedTime = (timestamp)=>{\n        const blockTime = new Date(timestamp).getTime();\n        const currentTime = Date.now();\n        const elapsedTime = currentTime - blockTime;\n        const seconds = Math.floor(elapsedTime / 1000);\n        const minutes = Math.floor(seconds / 60);\n        const hours = Math.floor(minutes / 60);\n        const days = Math.floor(hours / 24);\n        if (days > 0) {\n            return \"\".concat(days, \" days ago\");\n        } else if (hours > 0) {\n            return \"\".concat(hours, \" hours ago\");\n        } else if (minutes > 0) {\n            return \"\".concat(minutes, \" minutes ago\");\n        } else {\n            return \"\".concat(seconds, \" seconds ago\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"w-full md:w-3/4 lg:w-2/3 xl:w-1/2 divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                colSpan: \"3\",\n                                className: \"px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider\",\n                                children: \"Latest Blocks\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: latestBlocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm text-gray-900\",\n                                                children: block.blockHash\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-xs text-gray-500\",\n                                                children: calculateElapsedTime(block.timestamp)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-gray-900\",\n                                            children: [\n                                                \"Block Validated By \",\n                                                block.blockValidator\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-gray-900\",\n                                            children: [\n                                                block.transactions,\n                                                \" DCL\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4 py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-gray-600 text-sm font-semibold\",\n                    children: \"VIEW ALL BLOCKS \\xa0\\xa0 →\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = LatestBlocks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestBlocks);\nvar _c;\n$RefreshReg$(_c, \"LatestBlocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhdGVzdEJsb2Nrcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0M7SUFDUCxNQUFNQyxlQUFlO1FBQ25CO1lBQUVDLFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO1FBQ3pHO1lBQUVILFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO1FBQ3pHO1lBQUVILFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO0tBQzFHO0lBRUQsTUFBTUMsdUJBQXVCLENBQUNGO1FBQzVCLE1BQU1HLFlBQVksSUFBSUMsS0FBS0osV0FBV0ssT0FBTztRQUM3QyxNQUFNQyxjQUFjRixLQUFLRyxHQUFHO1FBQzVCLE1BQU1DLGNBQWNGLGNBQWNIO1FBQ2xDLE1BQU1NLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0gsY0FBYztRQUN6QyxNQUFNSSxVQUFVRixLQUFLQyxLQUFLLENBQUNGLFVBQVU7UUFDckMsTUFBTUksUUFBUUgsS0FBS0MsS0FBSyxDQUFDQyxVQUFVO1FBQ25DLE1BQU1FLE9BQU9KLEtBQUtDLEtBQUssQ0FBQ0UsUUFBUTtRQUVoQyxJQUFJQyxPQUFPLEdBQUc7WUFDWixPQUFPLEdBQVEsT0FBTEEsTUFBSztRQUNqQixPQUFPLElBQUlELFFBQVEsR0FBRztZQUNwQixPQUFPLEdBQVMsT0FBTkEsT0FBTTtRQUNsQixPQUFPLElBQUlELFVBQVUsR0FBRztZQUN0QixPQUFPLEdBQVcsT0FBUkEsU0FBUTtRQUNwQixPQUFPO1lBQ0wsT0FBTyxHQUFXLE9BQVJILFNBQVE7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTt3QkFBTUYsV0FBVTtrQ0FDZiw0RUFBQ0c7c0NBQ0MsNEVBQUNDO2dDQUFHQyxTQUFRO2dDQUFJTCxXQUFVOzBDQUFtRjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLakgsOERBQUNNO3dCQUFNTixXQUFVO2tDQUNkbkIsYUFBYTBCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDeEIsOERBQUNOOztrREFDQyw4REFBQ087d0NBQUdWLFdBQVU7OzBEQUNaLDhEQUFDRDtnREFBSUMsV0FBVTswREFBeUJRLE1BQU0xQixTQUFTOzs7Ozs7MERBQ3ZELDhEQUFDaUI7Z0RBQUlDLFdBQVU7MERBQXlCZCxxQkFBcUJzQixNQUFNeEIsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUU5RSw4REFBQzBCO3dDQUFHVixXQUFVO2tEQUNaLDRFQUFDRDs0Q0FBSUMsV0FBVTs7Z0RBQXdCO2dEQUFvQlEsTUFBTXpCLGNBQWM7Ozs7Ozs7Ozs7OztrREFFakYsOERBQUMyQjt3Q0FBR1YsV0FBVTtrREFDWiw0RUFBQ0Q7NENBQUlDLFdBQVU7O2dEQUF5QlEsTUFBTXZCLFlBQVk7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7K0JBVHREd0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZWYsOERBQUNWO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDVztvQkFBS1gsV0FBVTs4QkFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0tBakVTcEI7QUFtRVQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF0ZXN0QmxvY2tzLnRzeD9jNDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTGF0ZXN0QmxvY2tzKCkge1xyXG4gIGNvbnN0IGxhdGVzdEJsb2NrcyA9IFtcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4MTIzLi4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDEwOjMwOjAwJywgdHJhbnNhY3Rpb25zOiAxNSB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg0NTYuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDk6NDU6MDAnLCB0cmFuc2FjdGlvbnM6IDIwIH0sXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDc4OS4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAwODo1NTowMCcsIHRyYW5zYWN0aW9uczogMTIgfSxcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4MTIzLi4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDEwOjMwOjAwJywgdHJhbnNhY3Rpb25zOiAxNSB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg0NTYuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDk6NDU6MDAnLCB0cmFuc2FjdGlvbnM6IDIwIH0sXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDc4OS4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAwODo1NTowMCcsIHRyYW5zYWN0aW9uczogMTIgfSxcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4MTIzLi4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDEwOjMwOjAwJywgdHJhbnNhY3Rpb25zOiAxNSB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg0NTYuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDk6NDU6MDAnLCB0cmFuc2FjdGlvbnM6IDIwIH0sXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDc4OS4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAwODo1NTowMCcsIHRyYW5zYWN0aW9uczogMTIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVFbGFwc2VkVGltZSA9ICh0aW1lc3RhbXA6IHN0cmluZyB8IG51bWJlciB8IERhdGUpID0+IHtcclxuICAgIGNvbnN0IGJsb2NrVGltZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSBjdXJyZW50VGltZSAtIGJsb2NrVGltZTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gMTAwMCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcclxuXHJcbiAgICBpZiAoZGF5cyA+IDApIHtcclxuICAgICAgcmV0dXJuIGAke2RheXN9IGRheXMgYWdvYDtcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPiAwKSB7XHJcbiAgICAgIHJldHVybiBgJHtob3Vyc30gaG91cnMgYWdvYDtcclxuICAgIH0gZWxzZSBpZiAobWludXRlcyA+IDApIHtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9IG1pbnV0ZXMgYWdvYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHtzZWNvbmRzfSBzZWNvbmRzIGFnb2A7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0zLzQgbGc6dy0yLzMgeGw6dy0xLzIgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBMYXRlc3QgQmxvY2tzXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAge2xhdGVzdEJsb2Nrcy5tYXAoKGJsb2NrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57YmxvY2suYmxvY2tIYXNofTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj57Y2FsY3VsYXRlRWxhcHNlZFRpbWUoYmxvY2sudGltZXN0YW1wKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+QmxvY2sgVmFsaWRhdGVkIEJ5IHtibG9jay5ibG9ja1ZhbGlkYXRvcn08L2Rpdj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2Jsb2NrLnRyYW5zYWN0aW9uc30gRENMPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC00IHB5LTRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlZJRVcgQUxMIEJMT0NLUyAmbmJzcDsmbmJzcDsg4oaSPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdGVzdEJsb2NrcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF0ZXN0QmxvY2tzIiwibGF0ZXN0QmxvY2tzIiwiYmxvY2tIYXNoIiwiYmxvY2tWYWxpZGF0b3IiLCJ0aW1lc3RhbXAiLCJ0cmFuc2FjdGlvbnMiLCJjYWxjdWxhdGVFbGFwc2VkVGltZSIsImJsb2NrVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY3VycmVudFRpbWUiLCJub3ciLCJlbGFwc2VkVGltZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJjb2xTcGFuIiwidGJvZHkiLCJtYXAiLCJibG9jayIsImluZGV4IiwidGQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LatestBlocks.tsx\n"));

/***/ })

});