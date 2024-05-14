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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LatestBlocks() {\n    const latestBlocks = [\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        },\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        },\n        {\n            blockHash: \"0x123...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 10:30:00\",\n            transactions: 15\n        },\n        {\n            blockHash: \"0x456...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 09:45:00\",\n            transactions: 20\n        },\n        {\n            blockHash: \"0x789...\",\n            blockValidator: \"0x0000...\",\n            timestamp: \"2024-05-14 08:55:00\",\n            transactions: 12\n        }\n    ];\n    const calculateElapsedTime = (timestamp)=>{\n        const blockTime = new Date(timestamp).getTime();\n        const currentTime = Date.now();\n        const elapsedTime = currentTime - blockTime;\n        const seconds = Math.floor(elapsedTime / 1000);\n        const minutes = Math.floor(seconds / 60);\n        const hours = Math.floor(minutes / 60);\n        const days = Math.floor(hours / 24);\n        if (days > 0) {\n            return \"\".concat(days, \" days ago\");\n        } else if (hours > 0) {\n            return \"\".concat(hours, \" hours ago\");\n        } else if (minutes > 0) {\n            return \"\".concat(minutes, \" minutes ago\");\n        } else {\n            return \"\".concat(seconds, \" seconds ago\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"w-full md:w-3/4 lg:w-2/3 xl:w-1/2 divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                colSpan: \"3\",\n                                className: \"px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider\",\n                                children: \"Latest Blocks\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: latestBlocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm text-gray-900\",\n                                                children: block.blockHash\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-xs text-gray-500\",\n                                                children: calculateElapsedTime(block.timestamp)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-gray-900\",\n                                            children: [\n                                                \"Block Validated By \",\n                                                block.blockValidator\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-gray-900\",\n                                            children: [\n                                                block.transactions,\n                                                \" DCL\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/documentation\",\n                        children: \"Documentation\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-600 text-sm font-semibold\",\n                        children: \"VIEW ALL BLOCKS \\xa0\\xa0 →\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Rianul Amin\\\\Next JS\\\\DecentralizedChainLink-Explorer\\\\frontend\\\\src\\\\components\\\\LatestBlocks.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = LatestBlocks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestBlocks);\nvar _c;\n$RefreshReg$(_c, \"LatestBlocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhdGVzdEJsb2Nrcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0M7SUFDUCxNQUFNQyxlQUFlO1FBQ25CO1lBQUVDLFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO1FBQ3pHO1lBQUVILFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO1FBQ3pHO1lBQUVILFdBQVc7WUFBWUMsZ0JBQWdCO1lBQWFDLFdBQVc7WUFBdUJDLGNBQWM7UUFBRztRQUN6RztZQUFFSCxXQUFXO1lBQVlDLGdCQUFnQjtZQUFhQyxXQUFXO1lBQXVCQyxjQUFjO1FBQUc7UUFDekc7WUFBRUgsV0FBVztZQUFZQyxnQkFBZ0I7WUFBYUMsV0FBVztZQUF1QkMsY0FBYztRQUFHO0tBQzFHO0lBRUQsTUFBTUMsdUJBQXVCLENBQUNGO1FBQzVCLE1BQU1HLFlBQVksSUFBSUMsS0FBS0osV0FBV0ssT0FBTztRQUM3QyxNQUFNQyxjQUFjRixLQUFLRyxHQUFHO1FBQzVCLE1BQU1DLGNBQWNGLGNBQWNIO1FBQ2xDLE1BQU1NLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0gsY0FBYztRQUN6QyxNQUFNSSxVQUFVRixLQUFLQyxLQUFLLENBQUNGLFVBQVU7UUFDckMsTUFBTUksUUFBUUgsS0FBS0MsS0FBSyxDQUFDQyxVQUFVO1FBQ25DLE1BQU1FLE9BQU9KLEtBQUtDLEtBQUssQ0FBQ0UsUUFBUTtRQUVoQyxJQUFJQyxPQUFPLEdBQUc7WUFDWixPQUFPLEdBQVEsT0FBTEEsTUFBSztRQUNqQixPQUFPLElBQUlELFFBQVEsR0FBRztZQUNwQixPQUFPLEdBQVMsT0FBTkEsT0FBTTtRQUNsQixPQUFPLElBQUlELFVBQVUsR0FBRztZQUN0QixPQUFPLEdBQVcsT0FBUkEsU0FBUTtRQUNwQixPQUFPO1lBQ0wsT0FBTyxHQUFXLE9BQVJILFNBQVE7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTt3QkFBTUYsV0FBVTtrQ0FDZiw0RUFBQ0c7c0NBQ0MsNEVBQUNDO2dDQUFHQyxTQUFRO2dDQUFJTCxXQUFVOzBDQUFtRjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLakgsOERBQUNNO3dCQUFNTixXQUFVO2tDQUNkbkIsYUFBYTBCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDeEIsOERBQUNOOztrREFDQyw4REFBQ087d0NBQUdWLFdBQVU7OzBEQUNaLDhEQUFDRDtnREFBSUMsV0FBVTswREFBeUJRLE1BQU0xQixTQUFTOzs7Ozs7MERBQ3ZELDhEQUFDaUI7Z0RBQUlDLFdBQVU7MERBQXlCZCxxQkFBcUJzQixNQUFNeEIsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUU5RSw4REFBQzBCO3dDQUFHVixXQUFVO2tEQUNaLDRFQUFDRDs0Q0FBSUMsV0FBVTs7Z0RBQXdCO2dEQUFvQlEsTUFBTXpCLGNBQWM7Ozs7Ozs7Ozs7OztrREFFakYsOERBQUMyQjt3Q0FBR1YsV0FBVTtrREFDWiw0RUFBQ0Q7NENBQUlDLFdBQVU7O2dEQUF5QlEsTUFBTXZCLFlBQVk7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7K0JBVHREd0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZWYsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDVCw4REFBQ1c7d0JBQUtDLE1BQUs7a0NBQWlCOzs7Ozs7a0NBR2hDLDhEQUFDQzt3QkFBS2IsV0FBVTtrQ0FBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtLQXBFU3BCO0FBc0VULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhdGVzdEJsb2Nrcy50c3g/YzQyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIExhdGVzdEJsb2NrcygpIHtcclxuICBjb25zdCBsYXRlc3RCbG9ja3MgPSBbXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDEyMy4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAxMDozMDowMCcsIHRyYW5zYWN0aW9uczogMTUgfSxcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4NDU2Li4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDA5OjQ1OjAwJywgdHJhbnNhY3Rpb25zOiAyMCB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg3ODkuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDg6NTU6MDAnLCB0cmFuc2FjdGlvbnM6IDEyIH0sXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDEyMy4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAxMDozMDowMCcsIHRyYW5zYWN0aW9uczogMTUgfSxcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4NDU2Li4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDA5OjQ1OjAwJywgdHJhbnNhY3Rpb25zOiAyMCB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg3ODkuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDg6NTU6MDAnLCB0cmFuc2FjdGlvbnM6IDEyIH0sXHJcbiAgICB7IGJsb2NrSGFzaDogXCIweDEyMy4uLlwiLCBibG9ja1ZhbGlkYXRvcjogXCIweDAwMDAuLi5cIiwgdGltZXN0YW1wOiAnMjAyNC0wNS0xNCAxMDozMDowMCcsIHRyYW5zYWN0aW9uczogMTUgfSxcclxuICAgIHsgYmxvY2tIYXNoOiBcIjB4NDU2Li4uXCIsIGJsb2NrVmFsaWRhdG9yOiBcIjB4MDAwMC4uLlwiLCB0aW1lc3RhbXA6ICcyMDI0LTA1LTE0IDA5OjQ1OjAwJywgdHJhbnNhY3Rpb25zOiAyMCB9LFxyXG4gICAgeyBibG9ja0hhc2g6IFwiMHg3ODkuLi5cIiwgYmxvY2tWYWxpZGF0b3I6IFwiMHgwMDAwLi4uXCIsIHRpbWVzdGFtcDogJzIwMjQtMDUtMTQgMDg6NTU6MDAnLCB0cmFuc2FjdGlvbnM6IDEyIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlRWxhcHNlZFRpbWUgPSAodGltZXN0YW1wOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlKSA9PiB7XHJcbiAgICBjb25zdCBibG9ja1RpbWUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gY3VycmVudFRpbWUgLSBibG9ja1RpbWU7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIDEwMDApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblxyXG4gICAgaWYgKGRheXMgPiAwKSB7XHJcbiAgICAgIHJldHVybiBgJHtkYXlzfSBkYXlzIGFnb2A7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzID4gMCkge1xyXG4gICAgICByZXR1cm4gYCR7aG91cnN9IGhvdXJzIGFnb2A7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPiAwKSB7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzfSBtaW51dGVzIGFnb2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7c2Vjb25kc30gc2Vjb25kcyBhZ29gO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMy80IGxnOnctMi8zIHhsOnctMS8yIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgTGF0ZXN0IEJsb2Nrc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgIHtsYXRlc3RCbG9ja3MubWFwKChibG9jaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+e2Jsb2NrLmJsb2NrSGFzaH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+e2NhbGN1bGF0ZUVsYXBzZWRUaW1lKGJsb2NrLnRpbWVzdGFtcCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPkJsb2NrIFZhbGlkYXRlZCBCeSB7YmxvY2suYmxvY2tWYWxpZGF0b3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntibG9jay50cmFuc2FjdGlvbnN9IERDTDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNCBweS00XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jdW1lbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgIERvY3VtZW50YXRpb25cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+VklFVyBBTEwgQkxPQ0tTICZuYnNwOyZuYnNwOyDihpI8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0QmxvY2tzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXRlc3RCbG9ja3MiLCJsYXRlc3RCbG9ja3MiLCJibG9ja0hhc2giLCJibG9ja1ZhbGlkYXRvciIsInRpbWVzdGFtcCIsInRyYW5zYWN0aW9ucyIsImNhbGN1bGF0ZUVsYXBzZWRUaW1lIiwiYmxvY2tUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJyZW50VGltZSIsIm5vdyIsImVsYXBzZWRUaW1lIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImNvbFNwYW4iLCJ0Ym9keSIsIm1hcCIsImJsb2NrIiwiaW5kZXgiLCJ0ZCIsIkxpbmsiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LatestBlocks.tsx\n"));

/***/ })

});